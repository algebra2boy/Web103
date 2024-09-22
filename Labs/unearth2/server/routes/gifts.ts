import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import GiftsController from '../controllers/gifts.js';

// The fileURLToPath function is a utility function that converts a file URL to a file path. It takes a single argument, 
// which is a file URL in the form of a string, and returns a file path in the form of a string. 
// This function is useful when working with file URLs in Node.js, as many Node.js APIs expect file paths rather than file URLs.
const __filename = fileURLToPath(import.meta.url); // get the file path
const __dirname = path.dirname(__filename); // get the directory name of the current module file

const router = express.Router();

router.get('/', GiftsController.getGifts);

router.get('/:giftId', (_req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'));
});

export default router;