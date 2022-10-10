import Title from "./Title"
import styled from "styled-components"
import {useNavigate } from 'react-router-dom';

export default function SucessPage({confirmSucess,setConfirmSucess,seats,setSeats,date,setDate,selectedTime,setSelectedTime,selectedMovie,setSelectedMovie}){
let navigate =useNavigate();
    function backHome() {
      setConfirmSucess([])
      setSeats([])
      setDate("")
      setSelectedTime("")
      setSelectedMovie("")
        navigate('/')
    }
    return (
    <>
   <Title color= "#247A6B" weight="700">Pedido feito com sucesso!</Title>

   <Container>
   <ContainerTitle> Filme e sessão</ContainerTitle>
   <Content data-identifier="movie-session-infos-reserve-finished">{selectedMovie.title}</Content>
   <Content data-identifier="movie-session-infos-reserve-finished">{date} {selectedTime}</Content>
    </Container>


   <Container>
   <ContainerTitle> Ingressos </ContainerTitle>
   {confirmSucess.map((item)=> 
   seats.map((s)=> s.id === item.idAssento?
    <div key={item.idAssento}>  
    <Content data-identifier="seat-infos-reserve-finished">Assento {s.name} </Content>
      </div> :"" )
  )
  } 
    </Container>

   <Container>
   <ContainerTitle>Comprador(es)</ContainerTitle>
 {confirmSucess.map((item)=> 
   seats.map((s)=> s.id === item.idAssento?
    <div key={item.idAssento}>
    <Seats>Assento: {s.name} </Seats>
     <Content data-identifier="buyer-infos-reserve-finished"> Nome: {item.nome}</Content> 
      <Content data-identifier="buyer-infos-reserve-finished"> CPF: {item.cpf}</Content>
      </div> :"" )
  )
  } 
 </Container>
<Button onClick={backHome} data-identifier="back-to-home-btn"> Voltar pra Home</Button>
    </>
    )
} 

const Container = styled.div `
display:flex;
flex-direction:column;
width:300px;
margin-bottom:30px;
`

const ContainerTitle = styled.h1`
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
`

const Content = styled.p`

font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;
color: #293845;

`

const Seats =styled.h2`
margin-top:20px;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;
color: #293845;
background-color:#ededeb;
`

const Button = styled.div`
margin-top:62px;
display:flex;
align-items:center;
justify-content:center;
width: 225px;
height: 42px;
left: 74px;
top: 622px;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
color: #FFFFFF;
`
