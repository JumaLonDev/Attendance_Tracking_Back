import  express  from 'express';
import config  from './config'; 
import usersRoutes from "./routes/users.routes";
const app = express(); 

//Settings
app.set('port', config.port); 

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(usersRoutes);

export default app;