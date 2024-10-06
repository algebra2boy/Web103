import { pool } from './database.js';

const createGroceriesTableQuery = `
    CREATE TABLE IF NOT EXISTS groceries (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        category VARCHAR(255) NOT NULL,
        quantity INT NOT NULL,
        note TEXT NOT NULL,
        picture TEXT NOT NULL
    )
`;

const createGroceriesTable = async () => {
    try {
        const res = await pool.query(createGroceriesTableQuery);
        console.log('✅ groceries table created successfully');
    } catch (err) {
        console.error('⚠️ error creating groceries table', err);
    }
};

createGroceriesTable();
