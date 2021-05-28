import { Router, Request, Response } from 'express';
import {getStudent, createStudent} from '../controllers/students' 
const router = Router();

router.get('/', getStudent);
router.post('/', createStudent);

export default router;