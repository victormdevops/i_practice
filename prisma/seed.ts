import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.workplace.createMany({
    data: [{ name: "Alpha" }, { name: "Beta" }, { name: "Gamma" }],
  });

  await prisma.shift.createMany({
    data: [{ workplaceId: 1 }, { workplaceId: 1 }, { workplaceId: 2 }],
  });
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
