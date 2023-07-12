import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { moviesData } from '../Data'
import { Button } from 'react-bootstrap'

const Description = () => {

  const[movie, setMovie]=useState({})

  const {id} = useParams()

  console.log(id)

  const navgateReturn = useNavigate()

  useEffect(() => {
    const movieDescription = moviesData.find((el) => 
          el.id == id)
          setMovie(movieDescription)
  }, [id])
  
  return (
    <div>
    <h1>{movie.description}</h1>
    <Button variant="secondary" onClick={() => navgateReturn('/')}>return</Button>
    </div>
  )
}

export default Description