// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const {name,location,id}= req.body
    switch (
      req.method
    ){
      case "GET" :
        const project = await prisma.project.findMany({
          where:{id} }) 
          if (!project ){
            return res.status(400).json("user not found!")
          } 
      res.status(200).json({project})
      break
      case "POST" : 
      try {
        const newProject = await prisma.project.create({
          data : {
            name ,location, 
          }
        })
        res.status(200).json({newProject})
      } catch (error) {
        console.log(error);
        
      }
      break
      default : 
      res.status(404).json("error user ")
    }
  
}
