import express from 'express'
import CarsController from '../controllers/cars.js'

const router = express.Router()

router.get('/', CarsController.getCars)
router.post('/', CarsController.createCar)
router.get('/:id', CarsController.getCarById)
router.put('/:id', CarsController.updateCar)
router.delete('/:id', CarsController.deleteCar)

export default router