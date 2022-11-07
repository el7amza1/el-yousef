import { UsersIcon } from "@heroicons/react/24/outline";
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { id }: { id?: string } = req.query;
  const project = await prisma.project.findUnique({ where: { id: +id!  }, include:{users:true} });
  res.status(200).json({ project });
}



