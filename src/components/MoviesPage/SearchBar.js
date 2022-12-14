import styled from "styled-components"
import searchIcon from "../../assets/img/serachIcon.png"
export default function SearchBar({filterMovies,setFilterMovies}){
    
    return (
        <SearchBarContainer>
           <div>
        <input
        value={filterMovies}
        onChange={(e) => setFilterMovies(e.target.value)}
        type="text"
        placeholder="Digite o nome do filme"
        />  <img src={searchIcon} alt="icone de busca"/> </div>
        
    </SearchBarContainer>
    )
}

const SearchBarContainer = styled.div`
display: flex;
width:100%;
justify-content:center;
margin-bottom:20px;
div{
    background-color :#C3CFD9;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    width:280px;
    height:30px;
    border-radius: 0 5px 5px 0;
}
input{
    margin-left:4px;
    margin-right:8px;
    border:none;
    width:240px;
    height:24px;
    
}
img{

    top:0;
    right:0;
    width:18px;
}
`
