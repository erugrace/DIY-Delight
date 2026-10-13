import { pool } from './database.js'

const createCarsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS cars;

        CREATE TABLE cars (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            exterior VARCHAR(50) NOT NULL,
            wheels VARCHAR(50) NOT NULL,
            interior VARCHAR(50) NOT NULL,
            price DECIMAL(10, 2) NOT NULL
        );
    `

    try {
        await pool.query(createTableQuery)
        console.log('Cars table created successfully')
    } catch (error) {
        console.error('Error creating cars table:', error)
    }
}

createCarsTable()