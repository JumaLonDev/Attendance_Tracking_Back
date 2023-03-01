import { Router } from "express";
import { createNewUser, getUsers } from "../controllers/users.controller";

const router = Router();

router.get('/users', getUsers); // Trae todos los ususarios 
router.post('/users', createNewUser); 
router.get('/users', getUsers); // Trae a un usuario por ID
router.delete('/users', getUsers);
router.put('/users', getUsers);

export default router