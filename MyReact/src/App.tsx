import { useState } from "react"
import { Cadastro } from "./components/Cadastro"

function App() {
 
  const [cadastro, setCadastro] = useState<string[]>([
    'Meu nome : ',
    'Meu nome : ',
    'Cadastro 3',
    'Cadastro 4',
    'Cadastro 5'
  ])
  
  function createCadastro() {
setCadastro([...cadastro, 'gg'])
  }
  return (
  <div>
{cadastro.map(cadastros =>{
  return <Cadastro text={cadastros}/>
})}

<button onClick={createCadastro}>cadastrar</button>
  </div>


  )


  
}

export default App
