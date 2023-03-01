import { useEffect, useState } from 'react'
import Loader from '../../Components/Loading/Loading';
// API

import { getCirurgiaTipo, getCirurgiaCidade, getCirurgiaFaixaEtaria, getCirurgiaSexo } from '../../services/api';


import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
// import "./main.css"
import Container from 'react-bootstrap/Container';
import InputMask from 'react-input-mask';
import Paginator from '../../Components/Paginator/Paginator';

// import Menu from '../../Components/Menu/Menu.jsx';

function Cirurgias() {

  const [dt_inicio, setdtInicio] = useState("");
  const [dt_fim, setdtFim] = useState("");

  const [tipo,setDadosTipo] = useState(['']);
  const [sexo,setDadosSexo] = useState(['']);
  const [cidade,setDadosCidade] = useState(['']);
  const [faixa_etaria,setDadosFaixaEtaria] = useState(['']);

  const [isLoad,setIsLoad] = useState(true);


  const handleDados = async (e) => {
    e.preventDefault();

    try{
      setIsLoad(false)
      const responseTipo = await getCirurgiaTipo(dt_inicio,dt_fim);
      const responseSexo = await getCirurgiaSexo(dt_inicio,dt_fim);
      const responseCidade = await getCirurgiaCidade(dt_inicio,dt_fim);
      const responseFaixaEtaria = await getCirurgiaFaixaEtaria(dt_inicio,dt_fim);
  
      setDadosTipo(responseTipo);
      setDadosCidade(responseCidade);
      setDadosFaixaEtaria(responseFaixaEtaria);
      setDadosSexo(responseSexo);
      setIsLoad(true);
      
    }catch (e) {
      setIsLoad(false);
    }
    setIsLoad(true);
  }

  
  const returnTipo = (val , index) =>{
    
    return(
      <tr key={index}>
        <td>{val['TIPO']}</td>
        <td>{val['QTD']}</td>
      </tr>
    )
  }
  const returnCidade = (val , index) =>{
    
    return(
      <tr key={index}>
        <td>{val['UF']}</td>
        <td>{val['NM_CIDADE']}</td>
        <td>{val['QTD']}</td>
      </tr>
    )
  }
  const returnSexo = (val , index) =>{
    
    return(
      <tr key={index}>
        <td>{val['SEXO']}</td>
        <td>{val['QTD']}</td>
      </tr>
    )
  }
  const returnFaixaEtaria = (val , index) =>{
    
    return(
      <tr key={index}>
        <td>{val['FAIXA']}</td>
        <td>{val['QTD']}</td>
      </tr>
    )
  }

  return (
    <Container>
      <div className="mainPage">
      <h1>Cirúrgias</h1>

      <Form className='forms' onSubmit={handleDados} >
        <div className="titleDiv">
          <p>Pesquisa</p>
        </div>
        <div className="fields">
          <InputMask mask="99-99-9999"  placeholder='Data Inicial' className='inpText' onChange={(e)=> setdtInicio(e.target.value)}/>
          <InputMask mask="99-99-9999"  placeholder='Data Final'  className='inpText' onChange={(e)=> setdtFim(e.target.value)}/>
        </div>
        <div className="buttons">
          <button>Buscar</button>
        </div>
      </Form>

      <div className='qrsCards'>
        <div className="titleDiv">
          <p>Por Faixa Etária</p>
        </div>
        <Table striped> 
          <thead>
            <tr>
              <th>Idade</th>
              <th>Quantidade</th>
            </tr>
            
          </thead>
          <tbody>
            { isLoad ? faixa_etaria.map(returnFaixaEtaria) : <Loader/> }
            {/* {faixa_etaria.map(returnFaixaEtaria)} */}
          </tbody>
        
        </Table>
      </div>

      <div className='qrsCards'>
        <div className="titleDiv">
          <p>Cidade</p>
        </div>
        <Table striped> 
          <thead>
            <tr>
            <th>Estado</th>
            <th>Cidade</th>
            <th>Quantidade</th>
            </tr>
            
          </thead>          
          { isLoad ? <Paginator data={cidade}/> : <Loader/> }
            {/* <Paginator data={cidade}/> */}
        </Table>
      </div>

      <div className='qrsCards'>
        <div className="titleDiv">
          <p>Sexo</p>
        </div>
        <Table striped> 
          <thead>
            <tr>
              <th>Sexo</th>
              <th>Quantidade</th>
            </tr>
            
          </thead>
          <tbody>
          { isLoad ? sexo.map(returnSexo) : <Loader/> }
            {/* {  sexo.map(returnSexo)} */}
            

          </tbody>
        
        </Table>
      </div>

      <div className='qrsCards'>
        <div className="titleDiv">
          <p>Tipo</p>
        </div>
        <Table striped> 
          <thead>
            <tr>
            <th>Tipo</th>
            <th>Quantidade</th>
            
            </tr>
            
          </thead>
          <tbody>
          { isLoad ? tipo.map(returnTipo) : <Loader/> }
            {/* {tipo.map(returnTipo)} */}

          </tbody>
        
        </Table>
      </div>

      
    </div>
    </Container>

  );
}

export default Cirurgias;