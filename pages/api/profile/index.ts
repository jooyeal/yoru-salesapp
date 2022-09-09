import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

interface Data {
  userInfo?: User | null;
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const userId: string = req.query.userId as string;
      const userInfo = await prisma.user.findUnique({
        where: {
          id: userId,
        },
      });
      return res.status(200).json({ userInfo });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: "System error is occured" });
    }
  } else {
    return res.status(405).json({ message: "method not allowed" });
  }
}
