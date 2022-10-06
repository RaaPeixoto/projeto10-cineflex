import styled from "styled-components";

export default function SeatsItem({s,seatsColors,selectSeat,id}){

return (
<Seat  disabled = {!s.isAvailable}itemColor = {()=> seatsColors (s.isAvailable,id)} onClick = {()=> selectSeat(id)}> {s.name} </Seat>
)
}

const Seat = styled.button`
background: ${props=> props.itemColor};
border: 1px solid #808F9D;
border-radius: 12px;
width:26px;
height:26px;
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
display: flex;
align-items: center;
justify-content: center;
letter-spacing: 0.04em;
color:#000000;
margin-right:7px;
margin-bottom:18px;
cursor: pointer;

`