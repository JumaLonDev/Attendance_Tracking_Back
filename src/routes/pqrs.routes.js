import { Router } from "express";

const pqrs = require("../controllers/pqrs.controller");

const router = Router(); 

router.get("/pqrs", pqrs.getPqrs);// Trae todos los pqrs 
router.post("/pqrs", pqrs.CreateNewPqrs);// Crea un nuevo pqrs
router.get("/pqrs/:id", pqrs.getPqrsById); // Trae los PQRS Por ID
router.delete("/pqrs/:id", pqrs.deletePqrsById);// Elimina los Pqrs por ID
router.get("/pqrs/count", pqrs.getTotalPqrs);//Trae el total de los PQRS deligenciados
router.put("/pqrs/:id", pqrs.updatePqrsById);//Actuzaliza los datos del PQRS por ID

export default router; 