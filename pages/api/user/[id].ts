import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  switch (req.method){

    case 'POST' : 
       try {
        const { id }: { id?: string } = req.query;
        const user = await prisma.user.update({where: {id:id!},data:{
          image:req.body.image
        }});
        res.status(200).json({ user });
       } catch (error) {
        res.status(500).json({error: 'server is down'})
       }
      break

    default : res.status(400).json({message:"api is not find"})
  }
 
}








