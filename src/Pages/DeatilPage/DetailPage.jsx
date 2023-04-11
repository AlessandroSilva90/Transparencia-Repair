import { useNavigate, useParams } from "react-router-dom";
import DetailEyes from "../../images/eyes.png"
import Container from 'react-bootstrap/Container';
import Menu from "../../Components/Menu/Menu";
import "./main.css"
import { getContasPagasID,  getDetailsContas } from "../../services/api";
import { useState, useEffect } from "react";
import DetailItensCard from "../../Components/DetailItensCard/DetailItensCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DetailPage = () => {
    const [details, setDetails] = useState(['']);
    const [datas, setDatas] = useState(['']);
    const {cd_con_pag,cd_pagcon_pag} = useParams();
    let navigate = useNavigate();

       useEffect (() => {
        async function loadDatas(){
          const responsePagCon = await getContasPagasID(cd_pagcon_pag);
            setDetails(responsePagCon);
        //   const responseDetails =  await getDetailsContas(cd_con_pag)
        //     setDatas(responseDetails);
        } loadDatas();
    },[]);

    const returnAllDetails = (val , index) =>{
        return(
        <ul key={index}>
            {/* <li><label>N° Fornecedor: </label> {val['NR_DOCUMENTO']} </li> */}
            <li><label>Nome: </label> {val['NM_FORNECEDOR']}</li>
            <li><label>Descrição: </label> {val['DESCRICAO']}    </li>
            <li><label>Data Pagamento:</label> {val['DT_PAGAMENTO']} </li>
            <li><label>Parcela:</label> {val['PARCELA']}      </li>
            <li><label>Valor Pago:</label> R$ {val['VL_PAGO']}   </li>
        </ul>
        )
      }

    return (
      
        <Container>
        <Menu></Menu>
            opa
      </Container>
  
    );
}
 
export default DetailPage;
