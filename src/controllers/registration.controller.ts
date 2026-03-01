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
      return res.status(400).json({
        message: "Payment screenshot URL required",
      });
    }

    // Step 1: Create leader participant first
    const createdLeader = await prisma.participant.create({
      data: leader,
    });

    // Step 2: Create members
    const createdMembers = await prisma.participant.createMany({
      data: teamMembers ?? [],
    });

    // Step 3: Fetch created member IDs
    const memberRecords = await prisma.participant.findMany({
      where: {
        email: { in: (teamMembers ?? []).map((m: any) => m.email) },
      },
      select: { id: true },
    });

    const memberIds = memberRecords.map((m:any) => m.id);

    // Step 4: Create registration with linked IDs
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
    return res.status(500).json({
      message: "Server error",
    });
  }
};