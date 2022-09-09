import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

interface SignUpData {
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SignUpData>
) {
  if (req.method == "PUT") {
    try {
      const userId: string = req.body.userId;
      await prisma.user.update({
        where: { id: userId },
        data: { email: req.body.email },
      });
      return res.status(200).json({ message: "update is succeed" });
    } catch (error: any) {
      if (error.code) {
        console.log(error.code);
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
