import { Request, Response } from "express";
import {prisma}  from "../config/prisma";

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

    // Basic validation
    if (!paymentScreenshot) {
      return res.status(400).json({
        message: "Payment screenshot URL required",
      });
    }

    // Create Leader
    const leaderRecord = await prisma.participant.create({
      data: leader,
    });

    // Create Registration
    const registration = await prisma.registration.create({
      data: {
        teamName,
        teamSize,
        pptLink,
        videoLink,
        paymentScreenshot,
        registrationStatus,
        leaderId: leaderRecord.id,
      },
    });

    // Create Members
    for (const member of teamMembers) {
      await prisma.participant.create({
        data: {
          ...member,
          registrationMemberId: registration.id,
        },
      });
    }

    res.json({
      success: true,
      message: "Registration saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
    });
  }
};
