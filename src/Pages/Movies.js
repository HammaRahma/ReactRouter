import React, { useState } from 'react'
import { moviesData } from '../Data'
import MovieList from '../components/MovieList/MovieList'
import SearchMovie from '../components/SearchMovie/SearchMovie'
import AddMovie from '../components/AddMovie/AddMovie'

const Movies = () => {
  const [movies, setMovies]= useState(moviesData)
  const [searchMovie, setSearchMovie]= useState('')
  const [newRate, setNewRate] =useState(0)

  const add=(newMovie)=>{
    setMovies([...movies,newMovie])
  }

  return (
    <div>
    <AddMovie add={add}/>
    <SearchMovie searchMovie={searchMovie} setSearchMovie={setSearchMovie} newRate={newRate} setNewRate={setNewRate}/>
    
    <MovieList movies={movies}  searchMovie={searchMovie} newRate={newRate}/>
    </div>
  )
}

export default Movies