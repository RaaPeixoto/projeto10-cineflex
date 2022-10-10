import { useParams } from 'react-router-dom';
import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import Title from "./Title";
import Bottom from "./Bottom";
import { Link } from 'react-router-dom';
import Loading from './Loading';
import BackIcon from './BackIcon';

export default function SessionsPage(){
    const { idMovie } = useParams();

    const [days, setDays] = useState([]) 
   const [selectedMovie,setSelectedMovie] =useState([]) 
   console.log(days)
    const [error, setError] = useState(false) 
    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`
        const promise = axios.get(URL)
    
        promise.then((res) => {
         
          setDays(res.data.days) 
          setSelectedMovie(res.data) 
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        
        
          setError(true) 
        })
      },  [])

      if (error === true) {
        return <div>Erro na requisição! Tente de novo</div>
      }

      if (!error && days.length === 0) {
        return <Loading/>
      }
    return(

        <>
        <BackIcon/>
    <Title> Selecione o horário</Title>
    <SessionsContainer>
            {days.map((d,id)=>  
            <Session key={id}> 
            <Day data-identifier="session-date"> 
            {d.weekday} - {d.date}</Day> 
            <div>
            {(d.showtimes).map ((h)=> <Link to = {`/assentos/${h.id}`} style={{ textDecoration: 'none' }} key={h.id}><Time data-identifier="hour-minute-btn"> {h.name}</Time></Link>)}
            </div>
           
            </Session>)}
    </SessionsContainer>
    <Bottom image= {selectedMovie.posterURL} >
        <p data-identifier="movie-and-session-infos-preview">{selectedMovie.title}</p>
    </Bottom>

        </>
    )

}

const SessionsContainer = styled.div `
display:flex;
flex-direction:column;
width:100vw;
padding: 0 117px 23px 23px;

`
const Session = styled.div `
display:flex;
flex-direction:column;
width:100%;
text-decoration:"none";
div{
    display:flex;
}
`
const Day= styled.div `
width:300px;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;
letter-spacing: 0.02em;
color: #293845;
margin:22px 0;

`
const Time = styled.div `
display:flex;
width: 83px;
height: 43px;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;
justify-content:center;
letter-spacing: 0.02em;
color: #FFFFFF;
margin-right:8px;

`
