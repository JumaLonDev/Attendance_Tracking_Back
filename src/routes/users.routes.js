import { Router } from "express";
const users = require("../controllers/users.controller");
const router = Router();
const auth = require('../middleware/auth');

router.get("/users", auth.verifyToken,users.getUsers); // Trae todos los ususarios 
router.post("/users", users.createNewUser);  //Agrega un usuario
router.get("/users/count",auth.verifyToken, users.getTotalUsers); // Contar cuantos usuarios hay 
router.get("/users/:id", auth.verifyToken, users.getUserById); // Trae a un usuario por ID
router.delete("/users/:id",auth.verifyToken, users.deleteUserById); //Eliminar un usuario por ID
router.put("/users/:id",auth.verifyToken, users.updateUserById); // Actualziar datos del usuario por ID
router.post("/users/login", users.login);

export default router