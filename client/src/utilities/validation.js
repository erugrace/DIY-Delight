const validateCar = (wheels, interior) => {
  if (wheels === 'Off-Road' && interior === 'Red Sport') {
    return 'Off-Road wheels cannot be paired with the Red Sport interior.'
  }

  return ''
}

export default validateCar