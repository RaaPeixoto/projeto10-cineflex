import styled from "styled-components";
import claquete from "../assets/img/claquete.gif"
export default function Loading(){
    return(
<LoadingDiv>
<img src={claquete} alt="claquete"/> 
<p> Carregando...</p>
</LoadingDiv>
)
}

const LoadingDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
margin-top:110px;
img{
width:200px;
}
p{
    font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
}
`