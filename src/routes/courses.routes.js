import { Router } from "express";
const courses = require("../controllers/courses.controllers");
const auth = require('../middleware/auth');
const router = Router();

router.get("/courses",auth.verifyToken, courses.getCourses ); // Trae todos los cursos
router.post("/courses",auth.verifyToken, courses.createNewCourse);//Crea un nuevo curso
router.get("/courses/count",auth.verifyToken, courses.getTotalCourses);//Cuenta cuantos cursos estan registrados en la DB
router.get("/courses/:id",auth.verifyToken, courses.getCourseById);//Trae un curso por ID
router.get("/courses/UserByCourses/:id",auth.verifyToken, courses.GetUserByIdCourse);//Trae a los usuarios relacionados con los cursos
router.delete("/courses/:id",auth.verifyToken, courses.deleteCourseById)//Elimina cursos por ID;
router.put("/courses/:id",auth.verifyToken, courses.updateCoursesById);//Actualizar los datos de los cursos por ID
export default router;