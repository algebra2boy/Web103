import express from 'express';
import EventController from '../controllers/eventController.js';

const router = express.Router();

router.get('/location', EventController.getAllLocation);

export default router;