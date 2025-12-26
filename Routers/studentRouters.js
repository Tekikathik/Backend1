import express from 'express';

import { getStudentsDetails,addStudents } from '../Controllers/studentController.js';

const app=express();

const router = express.Router();

router.get('/get',getStudentsDetails);

router.post('/add',addStudents);

export default router;