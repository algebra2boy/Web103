import { pool } from "../config/database.js";

const getGifts = async (req, res) => {
    console.log("HELLO i am here")
    try {
        const res = await pool.query('SELECT * FROM gifts ORDER BY id ASC');
        console.log(res);
        res.status(200).json(res.rows);
    } catch(error) {
        res.status(409).json( { error: error.message } )
    }
}

export default {
    getGifts
}