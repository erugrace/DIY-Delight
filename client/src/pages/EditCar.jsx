import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'

const EditCar = () => {
  const { id } = useParams()

  const [name, setName] = useState('')
  const [exterior, setExterior] = useState('')
  const [wheels, setWheels] = useState('')
  const [interior, setInterior] = useState('')
  const [price, setPrice] = useState(0)

  useEffect(() => {
    fetch(`http://localhost:3000/api/cars/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name)
        setExterior(data.exterior)
        setWheels(data.wheels)
        setInterior(data.interior)
        setPrice(data.price)
      })
      .catch((error) => {
        console.error('Error fetching car:', error)
      })
  }, [id])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const updatedCar = {
      name,
      exterior,
      wheels,
      interior,
      price
    }

    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCar)
    }

    await fetch(
      `http://localhost:3000/api/cars/${id}`,
      options
    )

    window.location = `/customcars/${id}`
  }

  return (
    <div>
      <h1>Edit Car</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Car Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          Exterior:
          <select
            value={exterior}
            onChange={(event) => setExterior(event.target.value)}
          >
            <option value="Black">Black</option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
          </select>
        </label>

        <label>
          Wheels:
          <select
            value={wheels}
            onChange={(event) => setWheels(event.target.value)}
          >
            <option value="Sport">Sport</option>
            <option value="Chrome">Chrome</option>
            <option value="Off-Road">Off-Road</option>
          </select>
        </label>

        <label>
          Interior:
          <select
            value={interior}
            onChange={(event) => setInterior(event.target.value)}
          >
            <option value="Black Leather">Black Leather</option>
            <option value="Tan Leather">Tan Leather</option>
            <option value="Red Sport">Red Sport</option>
          </select>
        </label>

        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </label>

        <button type="submit">
          Save Changes
        </button>
      </form>
    </div>
  )
}

export default EditCar