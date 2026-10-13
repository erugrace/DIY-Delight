import React, { useEffect, useState } from 'react'
import '../App.css'

const ViewCars = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/cars')
      .then((response) => response.json())
      .then((data) => {
        setCars(data)
      })
      .catch((error) => {
        console.error('Error fetching cars:', error)
      })
  }, [])

  return (
    <div>
      <h1>Custom Cars</h1>

      {cars.length === 0 ? (
        <p>No custom cars yet.</p>
      ) : (
        cars.map((car) => (
          <div key={car.id}>
            <h2>{car.name}</h2>
            <p>Exterior: {car.exterior}</p>
            <p>Wheels: {car.wheels}</p>
            <p>Interior: {car.interior}</p>
            <p>Price: ${car.price}</p>
          </div>
        ))
      )}
    </div>
  )
}

export default ViewCars