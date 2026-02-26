import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = "l.simports@hotmail.com";
  const password = "2262144Lucas@";

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      role: "ADMIN",
      password: hashedPassword,
    },
    create: {
      name: "Lucas Admin",
      email,
      password: hashedPassword,
      role: "ADMIN",
      plan: "ENTERPRISE",
    },
  });

  console.log(`Admin user created/updated: ${user.email} (${user.id})`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
