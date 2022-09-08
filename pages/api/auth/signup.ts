import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

interface SignUpData {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignUpData>
) {
  if (req.method == "POST") {
    try {
      await prisma.user.create({ data: req.body });
      return res.status(200).json({ message: "Created User" });
    } catch (error: any) {
      if (error.code) {
        switch (error.code) {
          case "P2002":
            return res
              .status(401)
              .json({ message: "Email is already existed" });
          default:
            console.log(error);
            return res.status(500).json({ message: "System error is occured" });
        }
      } else {
        console.log(error);
        return res.status(500).json({ message: "System error is occured" });
      }
    }
  } else {
    return res.status(405).json({ message: "method not allowed" });
  }
}
