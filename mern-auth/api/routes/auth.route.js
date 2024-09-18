import express from 'express';
import { signup, signin } from '../controllers/auth.controller.js';

const router = express.router();

router.post("/signup",signup)
router.post("/signin",signin)
router.post("/google")

export default router;