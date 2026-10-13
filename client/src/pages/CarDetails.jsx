import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import '../App.css'

const CarDetails = () => {
  const { id } = useParams()
  const [car, setCar] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCar(data)
      })
      .catch((error) => {
        console.error('Error fetching car:', error)
      })
  }, [id])

  if (!car) {
    return <p>Loading car...</p>
  }

  return (
    <div>
      <h1>{car.name}</h1>

      <p>Exterior: {car.exterior}</p>
      <p>Wheels: {car.wheels}</p>
      <p>Interior: {car.interior}</p>
      <p>Price: ${car.price}</p>

      <Link to={`/edit/${car.id}`}>
        Edit Car
      </Link>

      <br />

      <Link to="/customcars">
        Back to Cars
      </Link>
    </div>
  )
}

export default CarDetails