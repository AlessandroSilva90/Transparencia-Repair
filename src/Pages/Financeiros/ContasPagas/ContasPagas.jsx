import { useEffect, useState } from 'react'
import { getDadosPorCnpj,getContasPagas } from '../../../services/api';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import parseISO from 'date-fns/parseISO';
import Swal from 'sweetalert2'; 
import {format, lastDayOfMonth} from "date-fns"

import Menu from '../../../Components/Menu/Menu';
import Loader from '../../../Components/Loading/Loading';
import TableComponent from '../../../Components/Table/Table';
import Paginator from '../../../Components/Paginator/Paginator';
import "./main.css"
import DetailEyes from "../../../images/eyes.png";


function ContasPagas() {

  const [dt_inicio, setdtInicio] = useState("");
  const [dt_fim, setdtFim] = useState("");
  const [dados,setDados] = useState(['']);
  const [isLoad,setIsLoad] = useState(true);
  const [isToggled, setIsToggled] = useState(false);
  const [byCNPJ, setCNPJ] = useState("");

  const handleDados = async (e) => {
      e.preventDefault();
      if(byCNPJ > 0 ){
        setIsToggled(!isToggled)
        const response = await getDadosPorCnpj(byCNPJ);
        setDados(response);
        setIsToggled(false)
      }
      else if(format(parseISO( dt_inicio), "yyyy") > format(parseISO( dt_fim), "yyyy")){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Verifique se as datas estão corretas!'
        })
      }else{
      try{
            setIsLoad(false)
            setIsToggled(!isToggled)
            const response = await getContasPagas(format(parseISO( dt_inicio), "dd-MM-yyyy"),format(parseISO( dt_fim), "dd-MM-yyyy"))
            setDados(response)
            setIsLoad(true)
      }catch (e){
        setIsLoad(false)
      }
      setIsLoad(true)
      setIsToggled(false)
      }

  }

  const returnDados = () =>{
      if(dados == null){
        Swal.fire({
            icon: 'error',
            title: 'Oops, Sem retorno',
            // text: 'Verifique se as datas estão corretas!'
          });
          setDados(['']);
      }else  return(<Paginator data={dados}/> );
  }

  return (
      
      <Container>
      <Menu></Menu>
      <div className="mainPage">
      
      <h1>Contas Pagas</h1>
      <Form className='forms' onSubmit={handleDados}>
        <div className="titleDiv">
          <p>Pesquisa</p>
        </div>
        <div className="fieldsFin">
          {/* <div className="labels">
            
          </div> */}
          <div className="rowDate">
            <input type={"date"}  placeholder='Data Inicial' className='inpText' onChange={(e)=> setdtInicio(e.target.value)}/>
            <input type={"date"}  placeholder='Data Final'  className='inpText' onChange={(e)=> setdtFim(e.target.value)}/>
          </div>
          <div className="rowLb">
            {/* <label>CNPJ</label> */}
            <input type="text" placeholder='CNPJ' onChange={(e) => setCNPJ(e.target.value) }/>
          </div>
        </div>
        <div className="buttons">
          <button>Buscar</button>
        </div>
      </Form>

      <div className='qrsCards'>
        <div className="titleDiv">
          <p>Pesquisa</p>
        </div>
        {isToggled ? <Loader/> :
          <TableComponent striped> 
        
          <thead>
            <tr>
              {/* <th>Codigo Pagamento</th> */}
              <th>NR documento</th>
              <th>Fornecedor</th>
              {/* <th>Parcela</th> */}
              {/* <th>Setor</th> */}
              {/* <th>Gasto com</th> */}
              <th>Descrição</th>
              <th>Data</th>
              <th>Valor</th>
              <th>Detalhes</th>
            </tr>
          </thead>

          
            {returnDados()}
            
          
        </TableComponent>

    }
    </div>
    </div>
    </Container>

  );
}

export default ContasPagas;