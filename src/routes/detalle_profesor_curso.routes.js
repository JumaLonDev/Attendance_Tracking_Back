import { Router } from "express";

const dtll_prof_cur = require("../controllers/detalle_profesor_curso.controller");
const auth = require('../middleware/auth');
const router = Router(); 

router.get("/dtll_prof_cur",auth.verifyToken, dtll_prof_cur.getDetalleProfesor);// Trae todos los detalles profesor curso
router.post("/dtll_prof_cur",auth.verifyToken,dtll_prof_cur.createNewDetalleProfeCurso);//Crear un nuevo detalle profesor curso
router.get("/dtll_prof_cur/:id",auth.verifyToken, dtll_prof_cur.getDetalleProfeCursoById); //Trae todos los detalles profesor curso por id
router.delete("/dtll_prof_cur/:id",auth.verifyToken, dtll_prof_cur.deleteDetalleProfeCursoById); //Elimina los detalles profesor curso por id
router.put("/dtll_prof_cur/:id",auth.verifyToken, dtll_prof_cur.updateDetalleProfeCursoById); // Actualizar los datos de los detalles profesor curso por id 

export default router; 