import {
    BrowserRouter as Router,
    Routes,
    Route

}  from "react-router-dom"
import { Cadastro } from "./components/Cadastro"
import { PaginaInicial } from "./components/PaginaInicial"

export function AppRoutes() {

    return (

        <Router>

            <Routes>

                <Route path ="/inicial" element={<PaginaInicial/>}/> 
                <Route path = "/cadastro" element={<Cadastro/>}/>

            </Routes>
        </Router>

    )
}   