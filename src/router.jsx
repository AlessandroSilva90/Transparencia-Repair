
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import AtendimentosPorCidade from "./Pages/Assistenciais/AtendimentosCidade/GetAtendPacCidade";
import ResumoUndInt from "./Pages/Assistenciais/ResUndInternacao/ResumoUndInternacao";
// import MainPage from "./Pages/Assistenciais/PaginaPrincipal/MainPage";
// import Cirurgias from "./Pages/Assistenciais/Cirurgias/Cirurgias";
// import Menu from "./Components/Menu/Menu";

import MetasInternacoes from "./Pages/NewPages/MetasInternacoes/MetasInternacoes";
import MetasCirurgias from "./Pages/NewPages/MetasCirurgias/MetasCirurgias";
import MetasUrgencia from "./Pages/NewPages/MetasUrgencia/MetasUrgencia";
import MetasConsultas from "./Pages/NewPages/MetasConsultas/MetasConsultas";
import MetasExames from "./Pages/NewPages/MetasExames/MetasExames";
import ContasPagas from "./Pages/Financeiros/ContasPagas/ContasPagas";


import SecundaryMainPage from "./Pages/NewPages/SecundaryMainPg/SecundaryMainPage";
import IndexPage from "./Pages/IndexPage/IndexPage";
import DetailPage from "./Pages/DeatilPage/DetailPage";
const AppRouts = () => {
 
    return(
        <Router>
                
            <Routes>
                    <Route exact path='/transparencia/assistenciais' element={<SecundaryMainPage/>} />
                    <Route exact path='/' element={<IndexPage/>} />

                    <Route exact path='transparencia/atendimentos_cidade' element={<AtendimentosPorCidade/>} />
                    <Route exact path='transparencia/atendimentos_unidade_internacao' element={<ResumoUndInt/>} />

                    {/* a partir daqui são as novas rotas */}
                    <Route exact path='/transparencia/Internacoes' element={<MetasInternacoes />} /> 
                    <Route exact path='transparencia/Cirurgias' element={<MetasCirurgias />} /> 
                    <Route exact path='transparencia/Ambulatorio' element={<MetasUrgencia />} /> 
                    <Route exact path='transparencia/Consultas' element={<MetasConsultas />} /> 
                    <Route exact path='transparencia/Exames' element={<MetasExames />} /> 

                    {/* Rotas Financeiro */}
                    <Route exact path='/transparencia/ContasPagas' element={<ContasPagas />} /> 

                    <Route exact path='/Detalhes/:cd_con_pag/:cd_pagcon_pag' element={<DetailPage />} /> 

                    
            </Routes>
                
        </Router>
    )
}

export default AppRouts;