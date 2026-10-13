import React, { useState } from 'react'
import CarsAPI from '../services/CarsAPI'
import '../App.css'

const CreateCar = () => {
  const [name, setName] = useState('')
  const [exterior, setExterior] = useState('')
  const [wheels, setWheels] = useState('')
  const [interior, setInterior] = useState('')
  const [price, setPrice] = useState(0)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const car = {
      name,
      exterior,
      wheels,
      interior,
      price
    }

    await CarsAPI.createCar(car)

    window.location = '/customcars'
  }

  return (
    <div>
      <h1>Customize Your Car</h1>

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
            <option value="">Select Exterior</option>
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
            <option value="">Select Wheels</option>
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
            <option value="">Select Interior</option>
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
          Save Car
        </button>

      </form>
    </div>
  )
}

export default CreateCar