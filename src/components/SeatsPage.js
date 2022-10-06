import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import Title from "./Title";
import Bottom from "./Bottom";
import { useParams } from 'react-router-dom';
import SeatsItem from "./SeatsItem";
import Loading from "./Loading";

export default function SeatsPage(){

    const { idSession} = useParams();
    const [seats,setSeats] =useState ([])
    const [selectedMovie,setselectedMovie]= useState ("")
    const [selectedDay,setselectedDay]= useState ("")
    const [selectedTime,setselectedTime]= useState ("")
    const [error, setError] = useState(false);
    const [selectedSeats,setselectedSeats] = useState ([])
console.log (selectedSeats)
    function selectSeat(s){
        if (!selectedSeats.includes(s)){
            console.log(s)
        setselectedSeats([...selectedSeats,s])
    } //aqui coloca um else para remover o assento selecionado
    }   

    function seatsColors (isAvailable,id){
        if (isAvailable === true){
            if(selectedSeats.includes(id)) {
                return "#1AAE9E"
                
            }else{
                return "#C3CFD9"
            }

        } else {
           return "#FBE192"
        }
    }
  
    useEffect(() => {
        const URL = `
        https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats
        `
        const promise = axios.get(URL)
    
        promise.then((res) => {
          console.log(res.data)
          setSeats(res.data.seats) 
          setselectedMovie(res.data.movie) 
          setselectedDay (res.data.day.weekday)
          setselectedTime(res.data.name)
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        
        
          setError(true) 
        })
      }, [])

      if (error === true) {
        return <div>Erro na requisição! Tente de novo</div>
      }

      if (!error && seats.length === 0) {
        return <Loading>Tela de loading...</Loading>    
      }
      
    return(

        <Page>
    <Title> Selecione os assentos</Title>
   <SeatsContainer>
    {seats.map ((s)=><SeatsItem key={s.id} id={s.id} s={s} seatsColors={seatsColors} selectSeat={selectSeat}/> )}
    
   </SeatsContainer>
    <SeatsSubititle>
        <div><Subititle color="#1AAE9E" border="#0E7D71"/> Selecionado</div>
        <div><Subititle color="#C3CFD9" border="#7B8B99"/> Disponível</div>
        <div><Subititle color="#FBE192" border="#F7C52B"/> Indisponível</div>
    </SeatsSubititle>

    <Bottom image= {selectedMovie.posterURL}>
        <p>{selectedMovie.title}</p>
        <p> {selectedDay} - {selectedTime}</p>
    </Bottom>

        </Page>
    )

}

const Page = styled.div `
display:flex;
width:100%;
flex-direction:column;
align-items:center;


`


const SeatsContainer = styled.div `
display:flex;
justify-content:space-between!important;
width:370px;
flex-wrap:wrap;
padding: 0 12px;

`

const SeatsSubititle =  styled.div `
display:flex;
width:400px;
padding: 0 78px;
justify-content: center;
div{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-family: 'Roboto',sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    letter-spacing: -0.013em;
    color: #4E5A65;
    margin-right:13px;
    
    }
`

const Subititle =  styled.p`
width: 25px;
height: 25px;
background: ${props=> props.color};
border: 1px solid ${props=> props.border};
border-radius: 17px;
margin-bottom:10px;
`