import express from 'express';
import EventController from '../controllers/eventController.js';

const router = express.Router();

router.get('/event', EventController.getAllEvents);
router.get('/event/:id', EventController.getsEventByLocationID);

export default router;