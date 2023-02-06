
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import MainPage from "./Pages/Assistenciais/GetAtendPacCidade";
const AppRouts = () => {
 
    return(
        <Router>
            <Routes>
                 <Route exact path='/' element={<MainPage/>} />
                 {/* <Route exact path='/login' element={<LoginPage/>} /> */}

            </Routes>
        </Router>
    )
}

export default AppRouts;