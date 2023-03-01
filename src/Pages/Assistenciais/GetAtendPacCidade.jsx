import { useEffect, useState } from 'react'
import { getDadosPorCidade } from '../../services/api';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./main.css"
import Container from 'react-bootstrap/Container';
import parseISO from 'date-fns/parseISO';
import Swal from 'sweetalert2'; 
import {format} from "date-fns"
import toDate from 'date-fns/toDate';

import Loader from '../../Components/Loading/Loading';


function AtendimentosPorCidade() {


  const [dt_inicio, setdtInicio] = useState("");
  const [dt_fim, setdtFim] = useState("");
  const [dados,setDados] = useState(['']);
  const [isLoad,setIsLoad] = useState(true);

  const handleDados = async (e) => {
      e.preventDefault();

      if(format(parseISO( dt_inicio), "MM-yyyy") > format(parseISO( dt_fim), "MM-yyyy")){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verifique se as datas estão corretas!'
        })
      }else{
      try{
        setIsLoad(false)
        const response = await getDadosPorCidade(format(parseISO( dt_inicio), "dd-MM-yyyy"),format(parseISO( dt_fim), "dd-MM-yyyy"))
        setDados(response)
        setIsLoad(true)
      }catch (e){
        setIsLoad(false)
      }
      setIsLoad(true)
    
      }
  }

  const returnDados = (val , index) =>{
    return(
      <tr key={index}>
        <td>{val['CIDADE']}</td>
        <td>{val['QTD']}</td>
        <td>{val['PERC']}</td>
      </tr>
    )
  }

  return (
    <Container>
      <div className="mainPage">
      <h1>Atendimentos por Cidade</h1>
      <Form className='forms' onSubmit={handleDados}>
        <div className="titleDiv">
          <p>Pesquisa</p>
        </div>
        <div className="fields">
          <input type={"date"}  placeholder='Data Inicial' className='inpText' onChange={(e)=> setdtInicio(e.target.value)}/>
          <input type={"date"}  placeholder='Data Final'  className='inpText' onChange={(e)=> setdtFim(e.target.value)}/>
        </div>
        <div className="buttons">
          <button>Buscar</button>
        </div>
      </Form>

      <div className='qrsCards'>
        <div className="titleDiv">
          <p>Pesquisa</p>
        </div>
        <Table striped> 
          <thead>
            <th>Cidade</th>
            <th>Quantidade</th>
            <th>Porcentagem</th>
          </thead>
          <tbody>
          { isLoad ? dados.map(returnDados) : <Loader/> }
            {/* {dados.map(returnDados)} */}
          </tbody>
        
        </Table>
      </div>
    </div>
    </Container>

  );
}

export default AtendimentosPorCidade;