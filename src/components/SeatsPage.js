import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import Title from "./Title";
import Bottom from "./Bottom";
import { useParams, useNavigate } from 'react-router-dom';
import SeatsItem from "./SeatsItem";
import Loading from "./Loading";
import Input from "./Input";
import BackIcon from "./BackIcon";
export default function SeatsPage({ setConfirmSucess, seats, setSeats, setSelectedTime, selectedTime, setDate, setSelectedMovie, selectedMovie }) {
    let navigate = useNavigate()
    const { idSession } = useParams();
    const [selectedDay, setSelectedDay] = useState("")
    const [error, setError] = useState(false);
    const [selectedSeats, setSelectedSeats] = useState([])
    const [buyers, setBuyers] = useState([])

    function selectSeat(s) {

        if (s.isAvailable === false) {
            alert("Esse assento não está disponível")
            return
        }
        if (!selectedSeats.includes(s.id)) {
            setSelectedSeats(([...selectedSeats, s.id]).sort())
            setBuyers([...buyers, { idAssento: s.id, nome: "", cpf: "" }])
        } else {
            const removeSeat = selectedSeats.filter((selected) => s.id !== selected)
            setSelectedSeats(removeSeat)
            const removeBuyer = buyers.filter((selected) => s.id !== selected.idAssento)
            setBuyers(removeBuyer)
        }
    }

    function seatsColors(s) {

        if (s.isAvailable === true) {
            if (selectedSeats.includes(s.id)) {
                return "#1AAE9E"

            } else {
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
            setSeats(res.data.seats)
            setSelectedMovie(res.data.movie)
            setSelectedDay(res.data.day.weekday)
            setSelectedTime(res.data.name)
            setDate(res.data.day.date)
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

    function bookSeats(event) {
        event.preventDefault();
        setConfirmSucess(buyers)
        const request = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: selectedSeats, // ids dos assentos
            compradores: [buyers]
        });
        request.catch((err) => {
            alert(err.response.data)


           
        })

        request.then(() =>

            navigate('/sucesso')

        )
    }

    return (
        <>
        <BackIcon/>
            <Title> Selecione os assentos</Title>
            <SeatsContainer>
                {seats.map((s) => <SeatsItem key={s.id} id={s.id} s={s} seatsColors={seatsColors} selectSeat={selectSeat} />)}
            </SeatsContainer>
            <SeatsSubititle>
                <div><Subititle color="#1AAE9E" border="#0E7D71" data-identifier="seat-selected-subtitle"/> Selecionado</div>
                <div><Subititle color="#C3CFD9" border="#7B8B99" data-identifier="seat-available-subtitle"/> Disponível</div>
                <div><Subititle color="#FBE192" border="#F7C52B" data-identifier="seat-unavailable-subtitle"/> Indisponível</div>
            </SeatsSubititle>
            <Form onSubmit={bookSeats}>
                {selectedSeats.map((seat) => <Input key={seat} seat={seat} allSeats={seats} buyers={buyers} setBuyers={setBuyers} />)}
                {selectedSeats.length > 0 ? <BookButton  data-identifier="reservation-btn" type="submit">Reservar assento(s)</BookButton> : ""}
            </Form>
            <Bottom image={selectedMovie.posterURL}>
                <p data-identifier="movie-and-session-infos-preview">{selectedMovie.title}</p>
                <p data-identifier="movie-and-session-infos-preview"> {selectedDay} - {selectedTime}</p>
            </Bottom>
        </>
    )

}


const SeatsContainer = styled.div`
display:flex;
justify-content:space-between!important;
width:370px;
flex-wrap:wrap;
padding: 0 12px;

`

const SeatsSubititle = styled.div`
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
const Subititle = styled.p`
width: 25px;
height: 25px;
background: ${props => props.color};
border: 1px solid ${props => props.border};
border-radius: 17px;
margin-bottom:10px;
`

const BookButton = styled.button `
cursor: pointer;
outline:none;
display:flex;
align-items:center;
justify-content:center;
width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
color: #FFFFFF;
margin-top:57px;
`

const Form = styled.form `
display:flex;
flex-direction:column;
align-items:center;

`