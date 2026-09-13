import express from 'express';
import { createRequirement, getRequirements } from '../controllers/requirementController.js';

const router = express.Router();

router.route('/')
  .post(createRequirement)
  .get(getRequirements);

export default router;