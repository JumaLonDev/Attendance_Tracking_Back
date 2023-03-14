import { Router } from "express";
const courses = require("../controllers/courses.controllers");

const router = Router();

router.get("/courses", courses.getCourses ); // Trae todos los cursos
router.post("/courses", courses.createNewCourse);//Crea un nuevo curso
router.get("/courses/count", courses.getTotalCourses);//Cuenta cuantos cursos estan registrados en la DB
router.get("/courses/:id", courses.getCourseById);//Trae un curso por ID
router.delete("/courses/:id", courses.deleteCourseById)//Elimina cursos por ID;
router.put("/courses/:id", courses.updateCoursesById);//Actualizar los datos de los cursos por ID
export default router;