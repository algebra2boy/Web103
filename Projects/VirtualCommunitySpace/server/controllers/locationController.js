import { pool } from "../config/database.js";

const getAllLocation = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getLocationByID = async (req, res) => {
    try {
        const id = req.params.id;
        const results = await pool.query('SELECT * FROM locations WHERE id = $1', [id]);
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export default {
    getAllLocation,
    getLocationByID
}