import  Jwt  from "jsonwebtoken";
import  bcrypt  from "bcryptjs";
import { getConnection, sql, queries } from "../database";
import { json } from "express";


export const getUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllUsers);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewUser = async (req, res) => {
  const {
    nombre,
    apellido,
    correo,
    correo_respaldo,
    num_documento,
    num_contrato,
    num_contacto,
  } = req.body;

  const contrasena =  bcrypt.hashSync(req.body.contrasena,8) 
  let { id_rol, estado_usuario } = req.body;

  if (
    nombre == null ||
    apellido == null ||
    correo == null ||
    correo_respaldo == null ||
    num_documento == null ||
    num_contrato == null ||
    num_contacto == null ||
    contrasena == null 
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  if (id_rol == null) id_rol = 3;
  if (estado_usuario == null) estado_usuario = 1;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.NVarChar, nombre)
      .input("apellido", sql.NVarChar, apellido)
      .input("correo", sql.NVarChar, correo)
      .input("correo_respaldo", sql.NVarChar, correo_respaldo)
      .input("num_documento", sql.NVarChar, num_documento)
      .input("num_contrato", sql.NVarChar, num_contrato)
      .input("num_contacto", sql.NVarChar, num_contacto)
      .input("id_rol", sql.Int, id_rol)
      .input("contrasena", sql.NVarChar, contrasena)
      .input("estado_usuario", sql.Int, estado_usuario)
      .query(queries.addNewUser);

    res.json({
      nombre,
      apellido,
      correo,
      correo_respaldo,
      num_documento,
      num_contrato,
      num_contacto,
      contrasena
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.getUserById);
  res.send(result.recordset[0]);
};

export const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool.request().input("id", id).query(queries.deleteUser);

  res.sendStatus(204);
};

export const getTotalUsers = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalUsers);
  res.json(result.recordset[0][""]);
};

export const updateUserById = async (req, res) => {
  const {
    nombre,
    apellido,
    correo,
    correo_respaldo,
    num_documento,
    num_contrato,
    num_contacto,
    id_rol,
    estado_usuario
  } = req.body;
  const contrasena =  bcrypt.hashSync(req.body.contrasena,8) 
  const { id } = req.params;
  if (
    nombre == null ||
    apellido == null ||
    correo == null ||
    correo_respaldo == null ||
    num_documento == null ||
    num_contrato == null ||
    num_contacto == null ||
    id_rol == null ||
    contrasena== null ||
    estado_usuario == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input("nombre", sql.NVarChar, nombre)
    .input("apellido", sql.NVarChar, apellido)
    .input("correo", sql.NVarChar, correo)
    .input("correo_respaldo", sql.NVarChar, correo_respaldo)
    .input("num_documento", sql.NVarChar, num_documento)
    .input("num_contrato", sql.NVarChar, num_contrato)
    .input("id_rol", sql.Int, id_rol)
    .input("num_contacto", sql.NVarChar, num_contacto)
    .input("contrasena", sql.NVarChar, contrasena)
    .input("id", sql.Int, id)
    .input("estado_usuario", sql.Int, estado_usuario)
    .query(queries.updatetUserById)


    res.json({
      nombre,
      apellido,
      correo,
      correo_respaldo,
      num_documento,
      num_contrato,
      num_contacto,
      id_rol,
      contrasena,
      estado_usuario
    });
};

// Controlador del Login
export  const login = async (req, res) => {
  const {correoLogin, contrasenaLogin} = req.body;
  try {
    const pool = await getConnection()
    const result = await pool.request().input("correo", sql.NVarChar, correoLogin).query(queries.getUserByEmail)
    


    if(!result.recordset[0]){
      res.status(404).json({message: "Error al encontrar el usuario"});
      return;
    }

    const isMatched = bcrypt.compareSync(contrasenaLogin,result.recordset[0].contrasena);

    if(!isMatched){
      res.status(404).json({message: "Las contraseñas no coinciden"});
      return;
    }
    
    const{id_usuario,nombre,apellido,correo,correo_respaldo,num_documento,num_contrato,num_contacto,id_rol,contrasena,estado_usuario} = result.recordset[0];
    let data = JSON.stringify({id_usuario,nombre,apellido,correo,correo_respaldo,num_documento,num_contrato,num_contacto,id_rol,contrasena,estado_usuario})

    const token = Jwt.sign(data, process.env.auth_token_key);
    res.json({token});
  } catch (error) {
    console.log(error);
    res.status(500).send({message: "No se pudo iniciar sesión"})
  }
} 
