import styled from "styled-components";

export default function Bottom(props){
    return (

        <BottomContainer>
        <Image><img src={props.image} alt="filme escolhido" data-identifier="movie-img-preview"/></Image>
        <div>
        {props.children}
        </div>
    </BottomContainer>
    )
}


const BottomContainer= styled.div `
display:flex;
position:fixed;
left: 0px;
bottom: 0px;
background: #DFE6ED;
border: 1px solid #9EADBA;
width: 100%;
height: 117px;
padding: 14px 10px;
align-items:center;
p{
font-family: 'Roboto',sans-serif;
font-style: normal;
font-weight: 400;
font-size: 26px;
line-height: 30px;
color: #293845;
}

`

const Image= styled.div `
width: 64px;
height: 89px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display:flex;
align-items: center;
justify-content:center;
margin-right:14px;
img{
    width: 48px;
height: 72px;
}
`