import express from 'express';
import cors from 'cors';
import "./config/dotenv.js";
import morgan from 'morgan';
import giftsRouter from './routes/gifts.js';
 
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/gifts', giftsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
});