import styled from "styled-components";

export default function Top (){
    return(
        <TitleBar>
            <p>CINEFLEX</p>
        </TitleBar>
    )

}

const TitleBar = styled.div`

width: 100vw;
height: 67px;
background: #C3CFD9;
display: flex;
justify-content:center;
align-items:center;

p{
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
color: #E8833A;

}

`