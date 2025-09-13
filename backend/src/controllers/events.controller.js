import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createEvent = async (req, res) => {
  try {
    const { title, description, organizerId, startDate, endDate, tags } = req.body;

    const event = await prisma.event.create({
      data: { title, description, organizerId, startDate, endDate, tags },
    });

    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany({
      include: { organizer: true, teams: true },
    });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
