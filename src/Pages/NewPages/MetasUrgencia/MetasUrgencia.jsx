import { useEffect, useState } from 'react'
import Loader from '../../../Components/Loading/Loading';
import Swal from 'sweetalert2'; 
import {format} from "date-fns"
import toDate from 'date-fns/toDate';

// API
import { getMetaAtendUrg } from '../../../services/api';
import { getMetCirurgiaAmb } from '../../../services/api';
import { getTratamentoConservador } from '../../../services/api';
// FIM API

import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./main.css"
import Container from 'react-bootstrap/Container';

import parseISO from 'date-fns/parseISO';
import Menu from '../../../Components/Menu/Menu';
import TableComponent from '../../../Components/Table/Table';
import Months from '../../../Components/Months/Months';



// ESsa aqui é para ambulatorio
function MetasUrgencia() {

    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");

    const [metas, setMetas] = useState(['']);
    const [metaCirAmb, setMetCirAmb] = useState(['']);
    const [metaTrat, setMetaTrat] = useState(['']);

    const [isLoad,setIsLoad] = useState(false);
    const [isToggled, setIsToggled] = useState(false);

  const handleDados = async (e) => {
    e.preventDefault();
    // console.log(`01-${mes}-${ano}`)
    if(ano == '<empty string>'){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifique se a data está corretas!'
      })
    }else{      
    try{
      setIsLoad(false)
      setIsToggled(!isToggled)
      const response = await getMetaAtendUrg(`01-${mes}-${ano}`);
      const responseCir = await getMetCirurgiaAmb(`01-${mes}-${ano}`);
      const responseTrat = await getTratamentoConservador(`01-${mes}-${ano}`);
      setMetas(response);
      setMetCirAmb(responseCir);
      setMetaTrat(responseTrat);
      setIsLoad(true);

    }catch (e) {
      setIsLoad(false);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Verifique se a data está correta!'
      })
    }
  }
  setIsToggled(false)
    setIsLoad(true);
  }

  return (
    <Container>
      <Menu></Menu>
      <div className="mainPage">

      <h1>Ambulatorio</h1>

      <Form className='forms' onSubmit={handleDados} >

        <div className="titleDiv">
          <p>Pesquisa</p>
        </div>

        <div className="fields">

          <div className="itemFields">
            <p>Mês</p>
            <select name="" id="" onChange={(e)=> setMes(e.target.value)} >
              <Months/>
            </select>
          </div>

          <div className="itemFields">
            <p>Ano</p>
            <input type={"text"}  placeholder='Ano'  className='inpText' maxLength={4} onChange={(e)=> setAno(e.target.value)}/> 
          </div>
          
        </div>

        <div className="buttons">
          <button>Buscar</button>
        </div>
      </Form>

      <div className='qrsCards'>

        <div className="titleDiv">
          <p>Atendimentos Ambulatoriais</p>
        </div>
        {isToggled ? <Loader/> :
          <TableComponent striped> 
            <thead>
              <tr>
                <th>TIPO</th>
                <th>Quantidade</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Urgencia</td>
                <td>{ metas['URGENCIA']} </td>
              </tr>
              <tr>
                <td>Cirurgias ambulatoriais</td>
                <td>{metaCirAmb['CIRAMBU']}</td>
              </tr>
              <tr>
                <td>Tratamento Conservador</td>
                <td>{metaTrat['TRAT_CONS']}</td>
              </tr>
              
            </tbody>
          
          </TableComponent>
        }
      </div> 
    </div>
    </Container>
  );
}

export default MetasUrgencia;