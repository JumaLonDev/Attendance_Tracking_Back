import { Router } from "express";
import { createNewUser, getUsers, getUserById, deleteUserById, getTotalUsers, updateUserById } from "../controllers/users.controller";

const router = Router();

router.get("/users", getUsers); // Trae todos los ususarios 
router.post("/users", createNewUser);  //Agrega un usuario
router.get("/users/count", getTotalUsers); // Contar cuantos usuarios hay 
router.get("/users/:id", getUserById); // Trae a un usuario por ID
router.delete("/users/:id", deleteUserById); //Eliminar un usuario por ID
router.put("/users/:id", updateUserById);

export default router