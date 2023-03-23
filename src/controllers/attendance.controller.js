import { getConnection, sql, queries} from "../database"; 

export const getAttendance = async (req, res) => {
    try {
         const pool = await getConnection();
         const result = await pool.request().query(queries.getAllAnttendance);
         res.json(result.recordset);
    } catch (error) {
        res.status(500); 
        res.send(error.message);
    }
}

export const CreateNewAttendance = async (req, res) => {
    const { f_inasistencia, observacion , id_curso, id_usuario } = req.body;
  
    if (observacion == null || id_curso == null || id_usuario == null ) {
      return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
  
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("f_inasistencia", sql.NVarChar, f_inasistencia)
        .input("observacion", sql.NVarChar, observacion)
        .input("id_curso", sql.Int, id_curso)
        .input("id_usuario", sql.Int, id_usuario)
        .query(queries.addNewAttendace);
      res.json({ f_inasistencia, observacion , id_curso, id_usuario });
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
};

export const getAttendanceById = async (req, res) => {
    const { id } = req.params; 
    const pool  = await getConnection();
    const result = await pool.request()
    .input("id", id)
    .query(queries.getAllAnttendanceById);
    res.send(result.recordset[0]);
}

export const deleteAttendanceById = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool.request()
    .input("id", id)
    .query(queries.deleteAttendanceById)
    res.sendStatus(204);
}

export const updateAttendanceById = async (req, res) => {
    const { f_inasistencia, observacion , id_curso, id_usuario } = req.body;
    const { id } = req.params;
    if (observacion == null || id_curso == null || id_usuario == null ) {
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    } 
    const pool = await getConnection();
      await pool
        .request()
        .input("f_inasistencia", sql.NVarChar, f_inasistencia)
        .input("observacion", sql.NVarChar, observacion)
        .input("id_curso", sql.Int, id_curso)
        .input("id_usuario", sql.Int, id_usuario)
        .input("id", sql.Int, id)
        .query(queries.updateAttendanceById);

      res.json({ f_inasistencia, observacion , id_curso, id_usuario });  
}