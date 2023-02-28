import { useEffect, useState } from 'react'
import { getResumoUnidadeInternacao } from '../../services/api';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./main.css"
import Container from 'react-bootstrap/Container';
import InputMask from 'react-input-mask';

// import Menu from '../../Components/Menu/Menu.jsx';

function ResumoUndInt() {

  const [dt_inicio, setdtInicio] = useState("");
  const [dt_fim, setdtFim] = useState("");

  const [dados,setDados] = useState([''])

  const handleDados = async (e) => {
    e.preventDefault();
    const response = await getResumoUnidadeInternacao(dt_inicio,dt_fim);
    setDados(response);
  }

  const returnDados = (val , index) =>{
    
    return(
      <tr key={index}>
        <td>{val['DS_UNID_INT']}</td>
        <td>{val['PAC00']}</td>
        <td>{val['ENT']}</td>
        <td>{val['ALTAS']}</td>
        <td>{val['OBITOS']}</td>
        <td>{val['SAI_OBITOS48']}</td>
        <td>{Math.round(val['PER_OCUP'])}</td>
        <td>{Math.round(val['TX_MORT'])}</td>
        <td>{val['TX_MORT_INST']}</td>
        <td>{val['PAC_DIA']}</td>
      </tr>
    )
  }

  return (
    <Container>
      <div className="mainPage">
      <h1>Atendimentos por Unidade de Internação</h1>
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
            <tr>
            <th>Setor</th>
            <th>Pacientes</th>
            <th>Internações</th>
            <th>Altas</th>
            <th>Obitos</th>
            <th>Óbitos 48h</th>
            <th>% de Ocupação</th>
            <th>Taxa de Mortalidade</th>
            <th>Taxa Mort Institucional</th>
            <th>Pacientes/Dia</th>
            </tr>
            
          </thead>
          <tbody>
            {dados.map(returnDados)}

          </tbody>
        
        </Table>
      </div>
  <div className="legendas">
    <div className="legTitle">
      <b>Legendas</b>
    </div>
    <p>{"Pacientes/dia -> (00:00h + Inter. + Transf.DE) - (Altas + Trans.PARA + Obitos)"}</p>
    <p>{"% Ocupação -> (nr Pac/Dia) / (Saídas[Altas + Óbitos + TRans.PARA**])"}</p>
    <p>{"Tx Mortalidade -> (Óbitos*100)* Saídas[Altas + Óbitos + Transf.PARA]"}</p>
  </div>
    </div>
    </Container>

  );
}

export default ResumoUndInt;