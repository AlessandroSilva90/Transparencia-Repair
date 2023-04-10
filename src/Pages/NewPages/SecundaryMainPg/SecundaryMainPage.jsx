import { useEffect, useState } from 'react'
import { getDadosPorCidade } from '../../../services/api';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./main.css";
import { Link } from 'react-router-dom';
import Menu from '../../../Components/Menu/Menu';

// import "./main.css"
import Container from 'react-bootstrap/Container';
import InputMask from 'react-input-mask';

// Images and icons
// import img from "../../images/despesas.png"
import atendCid from "../../../images/receitas.png"
import undInt from "../../../images/atendimentoporunidadedeinternacao.png"
import ambulatorio from "../../../images/medicos.png"
import Cirurgias from "../../../images/cirurgia.png"

function SecundaryMainPage() {

  return (
    <Container>
      <Menu></Menu>
      <div className="mainPage">
      <h1>Transparência Santa Casa de Misericórdia de Sobral</h1>
   

      <div className='bodyMain'>
        <div className="titleDiv">
            
        </div>
        <div className="rowIcones">

          <div className="iconLink">
            <Link to='/transparencia/Internacoes' style={{textDecoration:" none", textDecorationLine:"none"}}>
            <img src={undInt} alt="" srcset=""  />
              
              <p>Internações</p>
            </Link>
          </div>

          <div className="iconLink">
            <Link to='/transparencia/Cirurgias' style={{textDecoration:" none", textDecorationLine:"none"}}>
            <img src={Cirurgias} alt="" srcset="" />
              <p style={{textDecoration:" none", textDecorationLine:"none"}}>Cirurgias</p>
            </Link>
            </div>

            <div className="iconLink">
          <Link to='/transparencia/Ambulatorio' style={{textDecoration:" none", textDecorationLine:"none"}}>
            <img src={ambulatorio} alt="" srcset="" />
            <p>Ambulatorio</p>
          </Link>
          </div>

          <div className="iconLink">
          <Link to='/transparencia/Consultas' style={{textDecoration:" none", textDecorationLine:"none"}}>
            <img src={ambulatorio} alt="" srcset="" />
            <p>Consultas</p>
          </Link>
          </div>

          <div className="iconLink">
            <Link to='/transparencia/Exames' style={{textDecoration:" none", textDecorationLine:"none"}}>
              <img src={atendCid} alt="" srcset="" />
              <p>Exames</p>
            </Link>
        </div>

        {/* <div className="rowIcones">

          </div> */}

         
        </div>  
        
      </div>
    </div>
    </Container>

  );
}

export default SecundaryMainPage;