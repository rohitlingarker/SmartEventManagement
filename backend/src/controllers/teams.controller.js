import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const matchTeams = async (req, res) => {
  try {
    const { eventId, skillsNeeded } = req.body;

    // Find participants with most overlapping skills
    const users = await prisma.user.findMany({
      where: { role: "participant" },
    });

    const ranked = users.map(user => {
      const overlap = user.skills.filter(skill => skillsNeeded.includes(skill)).length;
      return { ...user, overlap };
    }).sort((a, b) => b.overlap - a.overlap);

    res.json(ranked.slice(0, 5)); // return top 5 matches
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
