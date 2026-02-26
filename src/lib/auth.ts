import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

// Conditionally include Google provider only when credentials are configured
const providers = [
  ...(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET
    ? [Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      })]
    : []),
  Credentials({
    name: "credentials",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Senha", type: "password" },
    },
    async authorize(credentials) {
      if (!credentials?.email || !credentials?.password) return null;

      const email = (credentials.email as string).trim().toLowerCase();

      const user = await prisma.user.findUnique({
        where: { email },
      });

      if (!user || !user.password) return null;

      const isValid = await bcrypt.compare(
        credentials.password as string,
        user.password
      );

      if (!isValid) return null;

      return {
        id: user.id,
        email: user.email,
        name: user.name,
        image: user.image,
      };
    },
  }),
];

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    newUser: "/registro",
  },
  providers,
  callbacks: {
    async jwt({ token, user, trigger }) {
      if (user) {
        token.id = user.id;
      }
      // Only fetch from DB on sign-in or explicit update (not on every request)
      if (user || trigger === "update") {
        if (token.id) {
          const dbUser = await prisma.user.findUnique({
            where: { id: token.id as string },
            select: { plan: true, role: true, documentsUsed: true, documentsResetAt: true },
          });
          if (dbUser) {
            token.plan = dbUser.plan;
            token.role = dbUser.role;
            token.documentsUsed = dbUser.documentsUsed;
            token.documentsResetAt = dbUser.documentsResetAt;
          }
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        (session as any).user.plan = token.plan;
        (session as any).user.role = token.role;
        (session as any).user.documentsUsed = token.documentsUsed;
        (session as any).user.documentsResetAt = token.documentsResetAt;
      }
      return session;
    },
  },
});
