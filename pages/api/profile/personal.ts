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
  if (req.method === "PUT") {
    try {
      const userId: string = req.body.userId;
      const userInfo = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          nickname: req.body.nickname,
          phoneNumber: req.body.phoneNumber,
          address: req.body.address,
        },
      });
      return res.status(200).json({ message: "update is succeed" });
    } catch (error: any) {
      console.log(error);
      return res.status(500).json({ message: "System error is occured" });
    }
  } else {
    return res.status(405).json({ message: "method not allowed" });
  }
}
