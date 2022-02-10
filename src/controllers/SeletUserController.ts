import { prisma } from '@prisma/client';
import {Request, Response} from 'express'

import { prismaClient } from '../database/prismaClient'




export class SelectUserController {
    async handle(request: Request, response: Response) {
        const {name,email,CPF,CEP,telefone} = request.body


      const seletUser = await prismaClient.user.findMany({
        where: {
         name,
         email,
         CEP,
         CPF,
         telefone

        }
      })
   
      
  
      return response.json("Usuarios encontrados: " + seletUser)
      
      console.log("passei aqui")
    }
  }
  
