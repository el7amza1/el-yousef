// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const {userId,projectId,id}= req.body
    switch (
      req.method
    ){
      case "GET" :
        const site = await prisma.site.findMany({
          where:{id} }) 
          if (!site ){
            return res.status(400).json("user not found!")
          } 
      res.status(200).json({site})
      break
      case "POST" : 
      try {
        const newSite = await prisma.site.create({
          data : {
            userId ,projectId, 
          }
        })
        res.status(200).json({newSite})
      } catch (error) {
        console.log(error);
        
      }
      break
      default : 
      res.status(404).json("error user ")
    }
  
}
