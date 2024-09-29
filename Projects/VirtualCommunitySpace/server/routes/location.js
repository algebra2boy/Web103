import express from 'express';
import LocationController from '../controllers/locationController.js';

const router = express.Router();

router.get('/location', LocationController.getAllLocation);
router.get('/location/:id', LocationController.getLocationByID);


export default router;