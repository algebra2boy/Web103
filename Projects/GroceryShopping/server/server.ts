import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'dotenv/config';

const app = express();

/**
 * Dependencies configurations
 */

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ message: 'Hello, world!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});