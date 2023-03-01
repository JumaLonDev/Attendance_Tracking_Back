import { getConnection } from "../database/connection";

export const getUsers = async (req, res) =>{
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM tbl_usuarios");
    res.json(result.recordset);
};

export const createNewUser = (req, res) =>{
    const {nombre,apellido,correo,correo_respaldo,num_documento, num_contrato,num_contacto,contrasena } = req.body
    
    if(nombre == null || apellido == null || correo == null || correo_respaldo == null || num_documento == null ||
        num_contacto == null, contrasena == null){
            return res.status(400).json({msg: 'Bad Request. Please fill all fields'}); 
        }

    console.log(nombre,apellido,correo,correo_respaldo,num_documento, num_contrato,num_contacto,contrasena);
    res.json('New User');
}
