import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react"
import Movie from "./Movie";
import Title from "./Title";
import Loading from "./Loading";
import SearchBar from "./SearchBar";

export default function MoviesPage(){
  const [filterMovies,setFilterMovies]=useState("")
    const [movies, setMovies] = useState([]) 
    const [error, setError] = useState(false) 
    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        const promise = axios.get(URL)
    
        promise.then((res) => {
        
          setMovies(res.data) 
        })
    
        promise.catch((err) => {
          console.log(err.response.data)
        
        
          setError(true) 
        })
      }, [])

      if (error === true) {
        return <div>Erro na requisição! Tente de novo</div>
      }

      if (!error && movies.length === 0) {
        return <Loading/>
      }
    return(

        <>
       
    <Title> Selecione o Filme</Title>
    <SearchBar filterMovies={filterMovies} setFilterMovies={setFilterMovies}/>
    <MoviesContainer>
         
          {movies.map((mv) => mv.title.toLowerCase().includes(filterMovies.toLowerCase())? <Movie key={mv.id} img={mv.posterURL} title = {mv.title} id = {mv.id}/> : "")}
    </MoviesContainer>
        </>
    )

}

const MoviesContainer = styled.div `
display:flex;
flex-wrap:wrap;
width:380px;
justify-content:space-between;

padding: 0 30px;

`