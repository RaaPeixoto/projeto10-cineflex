import styled from "styled-components"
export default function Input ({seat,allSeats,buyers,setBuyers}){


    function addBuyerName (e){
        const addName  = buyers.map((eachBuyer)=>{
           
      
            if(seat=== eachBuyer.idAssento){
              return{
                ...eachBuyer,
                nome:e
              }
            }else {
                return{
                    ...eachBuyer
                }
            }
          })
          setBuyers([...addName])


    }

    function addBuyerCPF (e){
        const addCPF = buyers.map((eachBuyer)=>{
      
            if(seat=== eachBuyer.idAssento){
              return{
                ...eachBuyer,
                cpf:e
              }
            }else {
                return{
                    ...eachBuyer
                }
            }
          })
          setBuyers([...addCPF])


    }
    
            
    
    return(
        <InputContainer>
     {allSeats.map ((s)=> s.id=== seat? <Seat key={s.id}>Assento {s.name}</Seat>: "")}
        <Contains> Nome do comprador:</Contains>
        <InputBar data-identifier="buyer-name-input" type= "text" onChange={e => addBuyerName(e.target.value)} placeholder="Digite seu nome..." required/>
        <Contains> CPF do comprador :</Contains>
        <InputBar  data-identifier="buyer-cpf-input" min="10000000000" max="99999999999"type= "number"  value={buyers.cpf} onChange={e => addBuyerCPF (e.target.value)}placeholder="Digite seu CPF..." required/>
        </InputContainer>
    )

}

const InputContainer = styled.div`

display:flex;
flex-direction:column;
margin-top: 41px;
`
const Contains = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
margin:15px 10px 0 0;

`

const Seat = styled.h2`
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 28px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #293845;
`

const InputBar = styled.input `
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
width: 327px;
height: 51px;
font-family: 'Roboto';
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
padding-left:18px;
&::placeholder{
  font-family: 'Roboto';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #AFAFAF;
}
`