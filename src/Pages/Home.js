import React, { useState } from 'react'
import { moviesData } from '../Data'
import MovieList from '../components/MovieList/MovieList'
const Home = () => {
  const [movies, setMovies] = useState(moviesData)
  const [searchMovie, setSearchMovie]= useState('')
  const [newRate, setNewRate] =useState(0)

  
  return (
    <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap'}}>
      
    <MovieList movies={movies}  searchMovie={searchMovie} newRate={newRate}/>
    </div>
  )
}

export default Home