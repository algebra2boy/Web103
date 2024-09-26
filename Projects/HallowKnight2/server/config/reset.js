import { pool } from './database.js';
import './dotenv.js';
import kniftData from '../data/knifts.js';

const createTableQuery = `
    DROP TABLE IF EXISTS knifts;

    CREATE TABLE IF NOT EXISTS knifts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        healthPoint INTEGER NOT NULL,
        audience TEXT NOT NULL,
        image TEXT NOT NULL,
        description TEXT NOT NULL
    )
`

const createKniftTable = async () => {
    try {
        const res = await pool.query(createTableQuery);
    } catch (err) {
        console.error('⚠️ error creating knifts table', err);
    }
}

const seedKniftsTable = async () => {
    await createKniftTable();

    kniftData.forEach((knift) => {
        const insertQuery = {
            text: "INSERT INTO knifts (name, healthPoint, audience, image, description) VALUES ($1, $2, $3, $4, $5)",
        };

        const values = [
            knift.name,
            knift.healthPoint,
            knift.audience,
            knift.image,
            knift.description,
        ];

        pool.query(insertQuery.text, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting knift', err);
            } else {
                console.log('🎁 gift inserted successfully');
            }
        });

    })
}

seedKniftsTable();
console.log('🌱 seeding knifts table...');