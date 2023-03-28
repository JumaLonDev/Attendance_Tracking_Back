import  express, { query }  from 'express';
import config  from './config'; 
import usersRoutes from "./routes/users.routes";
import coursesRoutes from "./routes/courses.routes";
import pqrsRoutes from "./routes/pqrs.routes";
import attendanceRoutes  from "./routes/attendance.routes";
import detalle_profesor_cursoRoutes from "./routes/detalle_profesor_curso.routes";
import detalle_curso_estudianteRoutes from "./routes/detalle_curso_estudiante.routes";
import emailRoutes from "./routes/email.routes"
const cors = require("cors"); 
const app = express(); 

//Settings
app.set('port', config.port); 

var corsOptions = {
    origin: true
}

//middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(usersRoutes);
app.use(coursesRoutes);
app.use(pqrsRoutes);
app.use(attendanceRoutes);
app.use(detalle_profesor_cursoRoutes);
app.use(detalle_curso_estudianteRoutes);
app.use(emailRoutes);


export default app;

