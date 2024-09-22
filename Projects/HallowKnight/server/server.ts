import express from 'express';

const app = express();

app.use('/public', express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));

import giftsRouter from './routes/gifts.js';

app.use('/knifts', giftsRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
});