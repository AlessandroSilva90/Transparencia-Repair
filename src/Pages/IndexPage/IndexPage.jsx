import { useEffect, useState } from 'react'
import { getDadosPorCidade } from '../../services/api';
// import Table from 'react-bootstrap/Table';
// import Form from 'react-bootstrap/Form';
import "./main.css";
import { Link } from 'react-router-dom';
import Menu from '../../Components/Menu/Menu';

// import "./main.css"
import Container from 'react-bootstrap/Container';
// import InputMask from 'react-input-mask';

// Images and icons
// import img from "../../images/despesas.png"
import imgAssistencial from "../../images/medicos.png"
import imgDespesas from "../../images/despesas.png"

function IndexPage() {

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
            <Link to='/transparencia/assistenciais' style={{textDecoration:" none", textDecorationLine:"none"}}>
              <img src={imgAssistencial} alt="" srcset="" />
              <p>Assistenciais</p>
            </Link>
          </div>
          <div className="iconLink">
            <Link to='/transparencia/ContasPagas' style={{textDecoration:" none", textDecorationLine:"none"}}>
              <img src={imgDespesas} alt="" srcset="" />
              <p>Despesas</p>
            </Link>
          </div>

        </div>
        
      </div>
    </div>
    </Container>

  );
}

export default IndexPage;