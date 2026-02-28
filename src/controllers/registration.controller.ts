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

    const registration = await prisma.registration.create({
      data: {
        teamName,
        teamSize,
        pptLink,
        videoLink,
        paymentScreenshot,
        registrationStatus,

        // ✅ Create Leader (nested)
        leader: {
          create: leader,
        },

        // ✅ Create Members (nested bulk)
        members: {
          create: teamMembers,
        },
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