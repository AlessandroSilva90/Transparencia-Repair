import { useEffect, useState } from 'react'
import { getDadosPorCidade } from '../../services/api';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./main.css"
import Container from 'react-bootstrap/Container';
import InputMask from 'react-input-mask';

// import Menu from '../../Components/Menu/Menu.jsx';

function AtendimentosPorCidade() {


  const [dt_inicio, setdtInicio] = useState("");
  const [dt_fim, setdtFim] = useState("");

  const [dados,setDados] = useState([''])

  const handleDados = async (e) => {
      e.preventDefault();
      const response = await getDadosPorCidade(dt_inicio,dt_fim)
    console.log(response)
    setDados(response)
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
          <InputMask mask="99-99-9999"  placeholder='Data Inicial' className='inpText' onChange={(e)=> setdtInicio(e.target.value)}/>
          <InputMask mask="99-99-9999"  placeholder='Data Final'  className='inpText' onChange={(e)=> setdtFim(e.target.value)}/>
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
            {dados.map(returnDados)}
          </tbody>
        
        </Table>
      </div>
    </div>
    </Container>

  );
}

export default AtendimentosPorCidade;