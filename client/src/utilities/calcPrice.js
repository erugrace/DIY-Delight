const BASE_PRICE = 30000

const exteriorPrices = {
  Black: 0,
  Red: 1000,
  Blue: 800
}

const wheelPrices = {
  Sport: 2500,
  Chrome: 1500,
  'Off-Road': 3000
}

const interiorPrices = {
  'Black Leather': 2000,
  'Tan Leather': 1800,
  'Red Sport': 2500
}

const calculatePrice = (exterior, wheels, interior) => {
  return (
    BASE_PRICE +
    (exteriorPrices[exterior] || 0) +
    (wheelPrices[wheels] || 0) +
    (interiorPrices[interior] || 0)
  )
}

export default calculatePrice