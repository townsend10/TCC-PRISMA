import { prisma } from '@prisma/client';
import {Request, Response} from 'express'

import { prismaClient } from '../database/prismaClient'




export class UpdateUserController {
    async handle(request: Request, response: Response) {
        const {email} = request.body

      const updateUser= await prismaClient.user.update({
       where: 
       {    
           
           email,
           
           
   
       },
        data: {
           email
        },
      });

      
   
      
  
      return response.json(updateUser.name)
      
      console.log("passei aqui")
    }
  }
  
