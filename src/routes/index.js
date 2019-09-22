import path from 'path';
import express from 'express';
import machinesRouter from './machines.router'; 
import podRouter from './pods.router'; 
const router = express.Router();
const apiBase = process.env.API_BASE_URL || '/api/1.0';

console.log(`${apiBase}/coffee/machines`);
router.use(`${apiBase}/coffee/machines`, machinesRouter); 
router.use(`${apiBase}/coffee/pods`, podRouter);

export default router;

