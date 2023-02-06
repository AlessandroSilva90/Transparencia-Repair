import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/api"
})

export const getDadosPorCidade = async (dt_inicio,dt_fim) =>{
    // const values = JSON.stringify({name, cpf, email,password,dataNascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tiposanguineo});
    // const user = await api.post('/usuario',values);   
    const dados = await api.get(`/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}
