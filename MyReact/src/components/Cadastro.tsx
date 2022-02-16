import React from 'react'

export function Cadastro(){

    return (
        <div>
        <label  className='Nome-Completo'><strong>Nome completo:</strong> </label>
    <input className='InputName'type="text" name="nome" id="nome" required></input>

   <div>
   <label  className='email'><strong>Email:</strong> </label>
    <input className='InputEmail'type="text" name="nome" id="nome" required></input>
   </div>
   <div>
   <label  className='CPF'><strong>CPF:</strong> </label>
    <input className='InputCPF'type="text" name="nome" id="nome" required></input>
   </div>
   
   <div>
   <label  className='Telefone'><strong>Telefone:</strong> </label>
    <input className='InputTelefone'type="text" name="nome" id="nome" required></input>
   </div>
    <div>
    <label  className='CEP'><strong>CEP:</strong> </label>
    <input className='InputCEP'type="text" name="nome" id="nome" required></input>
    
    <div>
    <label  className='Senha'><strong>Senha:</strong> </label>
    <input className='InputSenha'type="text" name="nome" id="nome" required></input>
    </div>
  
    </div>
    <div>
        <button>cadastrar</button>
    </div>
   </div>
        


 
    )
}