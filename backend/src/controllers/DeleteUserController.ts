import { prisma } from '@prisma/client';
import {Request, Response} from 'express'

import { prismaClient } from '../database/prismaClient'




export class DeleteUserController {
    async handle(request: Request, response: Response) {
        const {email,CPF,name} = request.body


      const deleteUser = await prismaClient.user.deleteMany({
        where: {
          email,
          name,
          CPF
        }
      })
   
      
  
      return response.json(deleteUser)
      
      console.log("passei aqui")
    }
  }
  
