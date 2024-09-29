import { pool } from './database.js';
import './dotenv.js';
import { locations } from '../data/locationData.js';
import { events } from '../data/eventsData.js';

// Start of the location query
// CASCADE is used to drop all dependent objects in the table
const createLocationQuery = `
    DROP TABLE IF EXISTS locations CASCADE;

    CREATE TABLE IF NOT EXISTS locations (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        image TEXT NOT NULL,
        address VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        state VARCHAR(255) NOT NULL,
        zip VARCHAR(255) NOT NULL
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
// End of the location query

const createEventQuery = `
    DROP TABLE IF EXISTS events;

    CREATE TABLE IF NOT EXISTS events (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        date VARCHAR(255) NOT NULL,
        time INT NOT NULL,
        image VarChar(255) NOT NULL,
        locationId INT NOT NULL,
        FOREIGN KEY (locationId) references locations(id)
    )
`

const createEventTable = async () => {
    try {
        const res = await pool.query(createEventQuery);
    } catch (err) {
        console.error('⚠️ error creating events table', err);
    }
};

const seedEventTable = async () => {
    await createEventTable();

    events.forEach((event) => {
        const insertQuery = {
            text: 'INSERT INTO events (title, date, time, image, locationId) VALUES ($1, $2, $3, $4, $5)',
        }

        const values = [
            event.title,
            event.date,
            event.time,
            event.image,
            event.locationId
        ];

        pool.query(insertQuery.text, values, (err, res) => {
            if (err) {
                console.error('⚠️ error inserting event', err);
            } else {
                console.log('🎉 event inserted successfully');
            }
        });
    })
}

const seedDatabase = async () => {
    await seedLocationsTable();
    await seedEventTable();
    console.log('🌱 seeding locations and events tables...');
}

seedDatabase();