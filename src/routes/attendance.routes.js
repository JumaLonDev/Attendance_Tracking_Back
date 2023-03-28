import { Router } from "express";

const attendance = require("../controllers/attendance.controller");
const auth = require('../middleware/auth');
const router = Router()

router.get("/attendance",auth.verifyToken, attendance.getAttendance); // Trae toda las tomas de asistencias
router.post("/attendance",auth.verifyToken, attendance.CreateNewAttendance); //Crear una nueva toma de asistencia
router.get("/attendance/:id",auth.verifyToken, attendance.getAttendanceById);//Trae la toma de una asistencia por ID
router.delete("/attendance/:id",auth.verifyToken, attendance.deleteAttendanceById);//Elimina una asistencia por ID
router.put("/attendance/:id",auth.verifyToken, attendance.updateAttendanceById);//Actualizar los datos de los pqrs por ID
router.get("/attendance/count/:id",auth.verifyToken, attendance.coutAnttendanceByid);//Contar el total de faltas para enviar el correo
router.get("/report/:id",auth.verifyToken, attendance.getReportAttendance); //Trae el informe de inasistencia por ID
export default router; 