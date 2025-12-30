import express from 'express';

import { getStudentsDetails,addStudents ,updataStudents} from '../Controllers/studentController.js';

const app=express();

const router = express.Router();

router.get('/get',getStudentsDetails);

router.post('/add',addStudents);
router.put('/update/:id',updataStudents);

export default router;