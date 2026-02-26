import express from 'express';
import { getPlatforms, getPlatform } from '../controllers/platformController.js';

const router = express.Router();

router.get('/', getPlatforms);
router.get('/:id', getPlatform);

export default router;
