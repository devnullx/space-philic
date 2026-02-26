import express from 'express';
import { getTeamMembers, getTeamMember } from '../controllers/teamController.js';

const router = express.Router();

router.get('/', getTeamMembers);
router.get('/:id', getTeamMember);

export default router;
