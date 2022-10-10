import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Movie({img,title,id}){


return (
  
    <MovieContainer data-identifier="movie-outdoor">
        <img src ={img} alt={title}/>
        <Details > {title} <Link to={`/sessoes/${id}`}><button>HORÁRIOS DAS SESSÕES</button></Link> </Details>
    </MovieContainer>
    
)
}
const Details = styled.div`
flex-direction:column;
 opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, rgba(0, 0, 0, .9), rgba(0, 0, 0, .55) 40%);
  padding: 20px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 800;
font-size: 15px;
line-height: 13px;
  button{
  text-decoration:none;
  
 
  background-color:#59d7dc;
  transition: transform 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55), background-position 800ms cubic-bezier(0.68, -0.55, 0.265, 1.55), box-shadow 500ms linear;
  background-size:contain;
  background-position: -250px center;
  background-repeat: no-repeat;
 
  border:none;
  border-radius:10px;
  height:30px;
    width: 100px;
    font-weight: 600;
    color: #FFFFFF;
font-size: 10px;
background-color:#E8833A;
cursor: pointer;
&:hover{
    transform: scale(1.2);
  background-position: -60px;
    background-color:#FFFFFF;
    color:#E8833A;
}
  }
 
`;
const MovieContainer = styled.div `
position:relative;
display:flex;
justify-content:center;
align-items:center;
background: #FFFFFF;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
width: 145px;
height: 209px;
margin-bottom:11px;
img {
width: 129px;
height: 193px;

}
&:hover{
    ${Details}{
        opacity:1;
    margin-bottom: -10px;
    text-shadow: 1px 1px 4px 3px rgba(0, 0, 0, 1);}
    }
`


