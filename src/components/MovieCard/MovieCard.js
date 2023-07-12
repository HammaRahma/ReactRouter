//import React, { useState } from 'react'
import { Button, Card, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import ReactStars from 'react-stars'

const MovieCard = ({movie}) => {

    console.log({movie})
    const navigate = useNavigate()
 
  return (

    <div>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" alt='ig' src={movie.posterUrl} />
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>{movie.description}</Card.Text><br/>
      <Card.Text>{movie.rate}</Card.Text><br/>
      <ReactStars count={5} size={24} value={movie.rate} />
      <Nav.Link as={Link} to={`/description/${movie.id}`}>Description</Nav.Link>
      <Button onClick={() => navigate(`/trailer/${movie.id}`)}>Trailer</Button>
    </Card.Body>
  </Card>
    </div>
  )
}

export default MovieCard