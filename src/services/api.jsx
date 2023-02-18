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

export const getResumoUnidadeInternacao = async (dt_inicio,dt_fim) => {
    const dados = await api.get(`/resumounidade/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getCirurgiaTipo =  async (dt_inicio,dt_fim) => {
    const dados = await api.get(`/cirurgia_tipo/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getCirurgiaSexo =  async (dt_inicio,dt_fim) => {
    const dados = await api.get(`/cirurgia_sexo/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getCirurgiaCidade =  async (dt_inicio,dt_fim) => {
    const dados = await api.get(`/cirurgia_cidade/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getCirurgiaFaixaEtaria =  async (dt_inicio,dt_fim) => {
    const dados = await api.get(`/cirurgia_faixa_etaria/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}
