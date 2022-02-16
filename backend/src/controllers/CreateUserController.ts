import { prisma } from '@prisma/client';
import {Request, Response} from 'express'

import { prismaClient } from '../database/prismaClient'
import { AuthenticateUserService } from '../services/AuthenticateUserService';




export class CreateUserController {
    async handle(request: Request, response: Response) {

   
       
      const {CEP,CPF,email,name,senha,telefone} = request.body

      const user = await prismaClient.user.create({
        data: {
            CEP,
            CPF,
            email,
            name,
            senha,
            telefone

        },
      });

    
   
      
  
      return response.json("Novo usuario criado com o nome: " + user.name + " e o email: " + user.email)
      
      console.log("passei aqui")
    }
  }
  
