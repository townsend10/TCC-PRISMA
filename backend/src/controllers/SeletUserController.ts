import { prisma } from '@prisma/client';
import {Request, Response} from 'express'

import { prismaClient } from '../database/prismaClient'




export class SelectUserController {
    async handle(request: Request, response: Response) {
       
      const {id,CPF,email} = request.body


      const seletUser = await prismaClient.user.findMany({
        where:{
          
        name:{
          endsWith: "e"
        }
        }
      })
   

      return  response.json(seletUser)
      
  
    //  return response.json("Usuarios encontrados: " + seletUser)
      
//      console.log("passei aqui")
    }
  }
  
