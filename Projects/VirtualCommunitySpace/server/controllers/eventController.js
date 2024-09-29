import { pool } from "../config/database.js";

const getAllEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY id ASC'); 
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export default {
    getAllEvents
}