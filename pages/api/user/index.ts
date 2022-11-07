// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from "../../../lib/prisma";
import { Data, User } from '../../../types';


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
    const {email , firstName,lastName ,password ,image , type ,id } : User= req.body
    switch (
      req.method
    ){
      case "GET" :
        const user = await prisma.user.findMany() 
          if (!user ){
            return res.status(400).json("user not found!")
          } 
      res.status(200).json({user})
      break
      case "POST" : 
      try {
        const newUser  = await prisma.user.create({
          data : {
            email , firstName,lastName ,password ,image , type , id:id!
          }
        })
        res.status(200).json({newUser})
      } catch (error) {
        console.log(error);
        
      }
      break
      default : 
      res.status(404).json("error user ")
    }
  
}
