import axios from "axios"
import { ResponseUser } from "./index"
async function Fn(): Promise<number> {
    return 200
}

const fn = Fn()
fn.then( n => console.log("valor de n: "+n))

async function getUser(id: number): Promise<ResponseUser> {
    try{
        const resposta = await axios.get<ResponseUser>("http://localhost:3001/users/"+ id)
        console.log(resposta.data)
        return resposta.data
    } catch (e) {
         throw new Error("Error disparado: " + e)
    }
}

getUser(10).then( dado =>{
    console.log("dado:", dado)
}).catch(e => {
    console.log("deu ruim")
    console.log(e.message)
})
