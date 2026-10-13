import { pool } from '../config/database.js'

const getCars = async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM cars ORDER BY id ASC'
    )

    res.status(200).json(results.rows)
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}
const createCar = async (req, res) => {
  const {
    name,
    exterior,
    wheels,
    interior,
    price
  } = req.body

  try {
    const results = await pool.query(
      `
      INSERT INTO cars
      (name, exterior, wheels, interior, price)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
      `,
      [name, exterior, wheels, interior, price]
    )

    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const getCarById = async (req, res) => {
  try {
    const results = await pool.query(
      'SELECT * FROM cars WHERE id = $1',
      [req.params.id]
    )

    if (results.rows.length === 0) {
      return res.status(404).json({
        error: 'Car not found'
      })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

const updateCar = async (req, res) => {
  const { id } = req.params

  const {
    name,
    exterior,
    wheels,
    interior,
    price
  } = req.body

  try {
    const results = await pool.query(
      `
      UPDATE cars
      SET name = $1,
          exterior = $2,
          wheels = $3,
          interior = $4,
          price = $5
      WHERE id = $6
      RETURNING *
      `,
      [
        name,
        exterior,
        wheels,
        interior,
        price,
        id
      ]
    )

    if (results.rows.length === 0) {
      return res.status(404).json({
        error: 'Car not found'
      })
    }

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(500).json({
      error: error.message
    })
  }
}

export default {
  getCars,
  createCar,
  getCarById,
  updateCar
}