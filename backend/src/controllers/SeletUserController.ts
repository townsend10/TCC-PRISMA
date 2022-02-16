import { prisma } from '@prisma/client';
import {Request, Response} from 'express'

import { prismaClient } from '../database/prismaClient'
import { AuthenticateUserService } from '../services/AuthenticateUserService';




export class SelectUserController {
    async handle(request: Request, response: Response) {
       
      //const select = new AuthenticateUserService()

      const seletUser = await prismaClient.user.findMany({

       select:{
         name: true,
         email: true,
         telefone:true,
         CEP:true,
         created_at:true
         
       }
        }
        
       

      )
   
      return  response.json(seletUser)
  
     
  
    //  return response.json("Usuarios encontrados: " + seletUser)
      
//      console.log("passei aqui")
    }
  }
  
