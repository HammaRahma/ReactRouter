import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../Data'
import { Button } from 'react-bootstrap'
const Trailer = () => {
  const [movie, setMovie]= useState({})

  const {id} = useParams()

  console.log(id)

  const navigate = useNavigate()

  useEffect(() => {
    const movieTrailer = moviesData.find((el) => 
          el.id == id)
          setMovie(movieTrailer)
  }, [id])
  
  return (
    <div>
    <iframe title='trailer' src={movie.trailer}/>
    <Button onClick={() => navigate(-1)}>Return</Button>
    </div>
  )
}

export default Trailer