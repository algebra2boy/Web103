import { pool } from './database.js';
import { locations } from '../data/locationData.js';

const createLocationQuery = `
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image TEXT NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip VARCHAR(255) NOT NULL,
    )
`

const createLocationTable = async () => {
    try {
        const res = await pool.query(createLocationQuery);
    } catch (err) {
        console.error('⚠️ error creating locations table', err);
    }
};

const seedLocationsTable = async () => {
    await createLocationTable();

    locations.forEach((location) => {
        const insertQuery = {
            text: 'INSERT INTO locations (name, image, address, city, state, zip) VALUES ($1, $2, $3, $4, $5, $6)',
        }

        const values = [
            location.name,
            location.image,
            location.address,
            location.city,
            location.state,
            location.zip
        ];

        pool.query(insertQuery.text, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting location', err);
            } else {
                console.log('📍 location inserted successfully');
            }
        });
    });
}

seedLocationsTable();