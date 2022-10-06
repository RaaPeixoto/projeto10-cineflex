
import GlobalStyle from "../assets/GlobalStyle.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesPage from "./MoviesPage.js"
import SessionsPage from "./SessionsPage.js";
import SeatsPage from "./SeatsPage.js";
import Top from "./Top.js";
export default function App (){
    return(
        <BrowserRouter>
        <GlobalStyle /> 
          <Top/>
          <Routes>
            <Route path="/" element={<MoviesPage />}/>
            <Route path="/sessoes/:idMovie" element={<SessionsPage />}/>
          <Route path="/assentos/:idSession" element={<SeatsPage />}/>
            {/* <Route path="/assentos/:idSessao" element={<SucessPage />}/>  */}
          </Routes>
        </BrowserRouter>
        
    
    )
}

