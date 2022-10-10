import styled from "styled-components";

export default function Title (props){
    return (

        <TitleContainer color = {props.color} weight= {props.weight}>
        <p>{props.children}</p>
    </TitleContainer>
    )
}

const TitleContainer= styled.div`
display:flex;
align-items:center;
justify-content:center;
width: 100%;
height: 110px;
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: ${props=> props.weight? props.weight: "400"} ;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: ${props=> props.color? props.color: "#293845"} ;
}

`