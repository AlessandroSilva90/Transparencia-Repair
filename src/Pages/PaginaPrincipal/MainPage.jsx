import { useEffect, useState } from 'react'
import { getDadosPorCidade } from '../../services/api';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import "./main.css";
import { Link } from 'react-router-dom';

// import "./main.css"
import Container from 'react-bootstrap/Container';
import InputMask from 'react-input-mask';

// Images and icons
import img from "../../images/despesas.png"

function MainPage() {

  return (
    <Container>
      <div className="mainPage">
      <h1>Transparência Santa Casa de Misericórdia de Sobral</h1>
   

      <div className='bodyMain'>
        <div className="titleDiv">
            Arrocha
        </div>
        <div className="rowIcones">

          <div className="iconLink">
            <Link to='atendimentos_cidade'>
              <img src={img} alt="" srcset="" />
              <p>Texto</p>
            </Link>
          </div>

          <div className="iconLink">
            <Link to='/at'>
              <img src={img} alt="" srcset="" />
              <p>Texto</p>
            </Link>
            </div>
          <div className="iconLink">
            <img src={img} alt="" srcset="" />
            <p>Texto</p>
          </div>
          <div className="iconLink">
            <img src={img} alt="" srcset="" />
            <p>Texto</p>
          </div>

        </div>
        
      </div>
    </div>
    </Container>

  );
}

export default MainPage;