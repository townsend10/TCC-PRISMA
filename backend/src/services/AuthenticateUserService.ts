import axios from 'axios'

export class AuthenticateUserService {

    async execute(name: String) {
        const url = "http://localhost:3000/cadastro"

        const response = await axios.post(url,null, {
            params:{
                name : name 
            },
            headers:{
                "Accept" : "application.json"
            }
        })
        
        return response.data
    }

}


