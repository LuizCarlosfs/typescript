import axios, { AxiosResponse } from 'axios'

export type ResponseUser =  { name: string, id: number, email: string }
axios.get<Array<ResponseUser>>("http://localhost:3001/users")
    .then((respose) =>{
        console.log(" ------respose.data -----------")
        const resposta = respose.data 
        console.log(resposta)
    })

    const maria: ResponseUser = { name: "maria", id: 2, email: "maria@server.com"}

    axios.post<ResponseUser>("http://localhost:3001/users", {name: "Joana", email:"joana@gmail.com"})
       .then((response) =>{
            console.log(response.data.id)
       })

    const getUser = (id:number): Promise<AxiosResponse<ResponseUser>> => {
           return axios.get("http://localhost:3001/users/"+ id)
        }

    console.log("---   getUser(2)  ----")
    getUser(2).then( ({data}) => console.log(data.name))