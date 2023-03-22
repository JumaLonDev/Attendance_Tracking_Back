import { Router } from "express";

const pqrs = require("../controllers/pqrs.controller");
const auth = require('../middleware/auth');
const router = Router(); 

router.get("/pqrs",auth.verifyToken, pqrs.getPqrs);// Trae todos los pqrs 
router.post("/pqrs",auth.verifyToken, pqrs.CreateNewPqrs);// Crea un nuevo pqrs
router.get("/pqrs/:id", auth.verifyToken, pqrs.getPqrsById); // Trae los PQRS Por ID
router.delete("/pqrs/:id", auth.verifyToken, pqrs.deletePqrsById);// Elimina los Pqrs por ID
router.get("/pqrs/count", auth.verifyToken, pqrs.getTotalPqrs);//Trae el total de los PQRS deligenciados
router.put("/pqrs/:id", auth.verifyToken, pqrs.updatePqrsById);//Actuzaliza los datos del PQRS por ID

export default router; 