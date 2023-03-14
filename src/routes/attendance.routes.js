import { Router } from "express";

const attendance = require("../controllers/attendance.controller")
const router = Router()

router.get("/attendance", attendance.getAttendance); // Trae toda las tomas de asistencias
router.post("/attendance", attendance.CreateNewAttendance); //Crear una nueva toma de asistencia
router.get("/attendance/:id", attendance.getAttendanceById);//Trae la toma de una asistencia por ID
router.delete("/attendance/:id", attendance.deleteAttendanceById);//Elimina una asistencia por ID
router.put("/attendance/:id", attendance.updateAttendanceById);//Actualizar los datos de los pqrs por ID

export default router; 