
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import AtendimentosPorCidade from "./Pages/Assistenciais/GetAtendPacCidade";
import ResumoUndInt from "./Pages/ResUndInternacao/ResumoUndInternacao";
import MainPage from "./Pages/PaginaPrincipal/MainPage";
import Cirurgias from "./Pages/Cirurgias/Cirurgias";


const AppRouts = () => {
 
    return(
        <Router>
            <Routes>
                 <Route exact path='transparencia/' element={<MainPage/>} />
                 <Route exact path='transparencia/atendimentos_cidade' element={<AtendimentosPorCidade/>} />
                 <Route exact path='transparencia/at' element={<ResumoUndInt/>} />
                 <Route exact path='transparencia/cirurgias' element={<Cirurgias/>} /> 

            </Routes>
        </Router>
    )
}

export default AppRouts;