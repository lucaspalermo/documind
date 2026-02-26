import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.findUnique({
    where: { email: "l.simports@hotmail.com" },
  });

  if (user) {
    console.log("Found:", user.email);
    console.log("Role:", user.role);
    console.log("Plan:", user.plan);
    console.log("Has password:", Boolean(user.password));

    // Test password
    if (user.password) {
      const isValid = await bcrypt.compare("2262144Lucas@", user.password);
      console.log("Password valid:", isValid);
    }
  } else {
    console.log("User NOT found - creating now...");
    const hashedPassword = await bcrypt.hash("2262144Lucas@", 12);
    const newUser = await prisma.user.create({
      data: {
        name: "Lucas Admin",
        email: "l.simports@hotmail.com",
        password: hashedPassword,
        role: "ADMIN",
        plan: "ENTERPRISE",
      },
    });
    console.log("Created:", newUser.email, newUser.id);
  }

  const allUsers = await prisma.user.findMany({
    select: { email: true, role: true, plan: true },
  });
  console.log("\nAll users:", JSON.stringify(allUsers, null, 2));
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
