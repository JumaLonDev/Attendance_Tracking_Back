import { getConnection, sql, queries } from "../database";

export const getPqrs = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllPqrs);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const CreateNewPqrs = async (req, res) => {
  const { id_usuario,text_pqrs, tipo_pqrs } = req.body;

  if (id_usuario == null ||  text_pqrs == null || tipo_pqrs == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("id_usuario", sql.Int, id_usuario)
      .input("text_pqrs", sql.NVarChar, text_pqrs)
      .input("tipo_pqrs", sql.NVarChar, tipo_pqrs)
      .query(queries.addNewPqrs);
    res.json({ id_usuario,text_pqrs, tipo_pqrs });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getPqrsById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.getPqrsById);
  res.send(result.recordset[0]);
};

export const GetPqrsByUser = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.GetPqrsByUser);

  console.log(result);
  res.send(result.recordset);
};

export const deletePqrsById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.deletePqrsById);
  res.sendStatus(204);
};

export const getTotalPqrs = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query(queries.getTotalPqrs);
  res.json(result.recordset[0][""]);
};



export const updatePqrsById = async (req, res) => {
  const {text_pqrs } = req.body;
  const { id } = req.params;
  if (text_pqrs == null) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input("text_pqrs", sql.NVarChar, text_pqrs)
    .input("id", sql.Int, id)
    .query(queries.updatePqrsById);

  res.json({text_pqrs });
};
