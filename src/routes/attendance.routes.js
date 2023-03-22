import { Router } from "express";

const attendance = require("../controllers/attendance.controller");
const auth = require('../middleware/auth');
const router = Router()

router.get("/attendance",auth.verifyToken, attendance.getAttendance); // Trae toda las tomas de asistencias
router.post("/attendance",auth.verifyToken, attendance.CreateNewAttendance); //Crear una nueva toma de asistencia
router.get("/attendance/:id",auth.verifyToken, attendance.getAttendanceById);//Trae la toma de una asistencia por ID
router.delete("/attendance/:id",auth.verifyToken, attendance.deleteAttendanceById);//Elimina una asistencia por ID
router.put("/attendance/:id",auth.verifyToken, attendance.updateAttendanceById);//Actualizar los datos de los pqrs por ID

export default router; 