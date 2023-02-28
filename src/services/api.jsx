import axios from "axios";

export const api = axios.create({
    baseURL: "http://201.20.72.194:9097/santacasa/portal/"
})

export const getDadosPorCidade = async (dt_inicio,dt_fim) =>{
    // const values = JSON.stringify({name, cpf, email,password,dataNascimento,cep,logradouro,numero,complemento,bairro,cidade,estado,tiposanguineo});
    // const user = await api.post('/usuario',values);   
    const dados = await api.get(`atend_cidade/dt_ini/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getResumoUnidadeInternacao = async (dt_inicio,dt_fim) => {
    const dados = await api.get(`get_res_und/dt_ini/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getCirurgiaTipo =  async (dt_inicio,dt_fim) => {
    const dados = await api.get(`cirurgias_tipo/dt_ini/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getCirurgiaSexo =  async (dt_inicio,dt_fim) => {
    const dados = await api.get(`cirurgias_sexo/dt_ini/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getCirurgiaCidade =  async (dt_inicio,dt_fim) => {
    const dados = await api.get(`cirurgias_cidade/dt_ini/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}

export const getCirurgiaFaixaEtaria =  async (dt_inicio,dt_fim) => {
    const dados = await api.get(`cirurgias_faixa_etaria/dt_ini/${dt_inicio}/dt_fim/${dt_fim}`);   
    return dados.data;
}
