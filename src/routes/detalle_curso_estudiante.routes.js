import { request, Router } from "express";

const dtll_cur_estu = require("../controllers/detalle_curso_estudiante.controller");

const router = Router();

router.get("/dtll_cur_estu", dtll_cur_estu.getDetalleCursosEstudiantes);//Trae todos los detalles de los cursos y estudiantes
router.post("/dtll_cur_estu", dtll_cur_estu.createNewDCE);//Crear un nuevo detalle de los cursos con los estudiantes
router.get("/dtll_cur_estu/:id", dtll_cur_estu.getDCEById); // Traer un DetalleCursosEstudiantes por ID
router.delete("/dtll_cur_estu/:id", dtll_cur_estu.deleteDCEById);//Eliminar un un DetalleCursosEstudiantes por ID
router.put("/dtll_cur_estu/:id", dtll_cur_estu.updateDCEById);//Actualizar los datos de un  DetalleCursosEstudiantes por ID

export default router; 