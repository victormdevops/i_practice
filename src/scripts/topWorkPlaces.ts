import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface Result {
  name: string;
  shifts: number;
}

async function fetchTopWorkplaces() {
  try {
    const workplaces = await prisma.workplace.findMany({
      include: { shifts: true },
    });

    const results: Result[] = workplaces.map((wp) => ({
      name: wp.name,
      shifts: wp.shifts.length,
    }));

    const topThree = results.sort((a, b) => b.shifts - a.shifts).slice(0, 3);

    console.log(JSON.stringify(topThree, null, 2));
  } catch (err) {
    console.error("Error:", err);
    console.log("[]");
  } finally {
    await prisma.$disconnect();
  }
}

fetchTopWorkplaces();
