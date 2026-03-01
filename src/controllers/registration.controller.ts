import { Request, Response } from "express";
import { prisma } from "../config/prisma";

export const registerTeam = async (req: Request, res: Response) => {
  try {
    const {
      teamName,
      teamSize,
      leader,
      teamMembers,
      paymentScreenshot,
      pptLink,
      videoLink,
      registrationStatus,
    } = req.body;

    if (!paymentScreenshot) {
      return res.status(400).json({ message: "Payment screenshot URL required" });
    }

    // Step 1: Create leader
    const createdLeader = await prisma.participant.create({
      data: leader,
    });

    // Step 2: Create members one by one (no createMany — it uses transactions)
    const createdMembers = await Promise.all(
      (teamMembers ?? []).map((member: any) =>
        prisma.participant.create({ data: member })
      )
    );

    const memberIds = createdMembers.map((m) => m.id);

    // Step 3: Create registration
    const registration = await prisma.registration.create({
      data: {
        teamName,
        teamSize,
        pptLink,
        videoLink,
        paymentScreenshot,
        registrationStatus,
        leaderId: createdLeader.id,
        memberIds: memberIds,
      },
    });

    return res.status(201).json({
      success: true,
      message: "Registration saved successfully",
      registrationId: registration.id,
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};