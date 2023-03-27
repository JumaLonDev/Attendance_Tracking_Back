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
    const inasistencia = req.body;
    console.log(inasistencia);
    try {
      const pool = await getConnection();
      inasistencia.forEach( async element => {
        const observacion = ''; 
        await pool
        .request()
        .input("f_inasistencia", sql.Date, element.f_inasistencia)
        .input("observacion", sql.NVarChar, observacion)
        .input("id_curso", sql.Int, element.id_curso)
        .input("id_usuario", sql.Int, element.id_usuario)
        .input("c_inasistencia", sql.Int, element.c_inasistencia)
        .query(queries.addNewAttendace);
      res.status(200)
      });
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
    const { f_inasistencia, observacion , id_curso, id_usuario, c_inasistencia } = req.body;
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
        .input("c_inasistencia", sql.Int, c_inasistencia)
        .query(queries.updateAttendanceById);

      res.json({ f_inasistencia, observacion , id_curso, id_usuario, c_inasistencia  });  
}