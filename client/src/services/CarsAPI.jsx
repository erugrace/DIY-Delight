const createCar = async (car) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(car)
  }

  const response = await fetch(
    'http://localhost:3000/api/cars',
    options
  )

  const data = await response.json()

  return data
}

export default {
  createCar
}