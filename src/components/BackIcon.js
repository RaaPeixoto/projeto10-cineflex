import IconSrc from "../assets/img/arrowIcon.png"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function BackIcon (){
    let navigate = useNavigate();
    function backPage(){
        navigate(-1)
    }
 return (
 <IconImg onClick= {backPage}src={IconSrc}/>
 
 )
} 

const IconImg = styled.img`
cursor: pointer;
width:30px;
position:absolute;
top:20px;
left:20px;
`