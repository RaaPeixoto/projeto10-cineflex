
import GlobalStyle from "../assets/GlobalStyle.js"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesPage from "./MoviesPage.js"
import SessionsPage from "./SessionsPage.js";
import SeatsPage from "./SeatsPage.js";
import SucessPage from "./SucessPage.js";
import Top from "./Top.js";
import styled from "styled-components";
import { useState } from "react";
export default function App (){
  const [confirmSucess,setConfirmSucess] =useState([])
  const [seats,setSeats] =useState ([])
  const [date,setDate] =useState ("")
  const [selectedTime,setSelectedTime]= useState ("")
  const [selectedMovie,setSelectedMovie]= useState ("")

  

    return(
        <BrowserRouter>
        <GlobalStyle /> 
          <Top/> 
          <Page>
          <Routes>
            <Route path="/" element={<MoviesPage />}/>
            <Route path="/sessoes/:idMovie" element={<SessionsPage />}/>
          <Route path="/assentos/:idSession" element={<SeatsPage  setConfirmSucess={setConfirmSucess} seats={seats} setSeats={setSeats}  setDate = {setDate} setSelectedTime={setSelectedTime} selectedTime={selectedTime} setSelectedMovie={setSelectedMovie} selectedMovie={selectedMovie}/>}/>
            <Route path="/sucesso" element={<SucessPage confirmSucess={confirmSucess} seats={seats} date={date} selectedTime = {selectedTime} selectedMovie={selectedMovie}/>}/> 
          </Routes>
          </Page>
        </BrowserRouter>
        
    
    )
}

const Page = styled.div `
display:flex;
width:100%;
flex-direction:column;
align-items:center;
padding-bottom:130px;

`
