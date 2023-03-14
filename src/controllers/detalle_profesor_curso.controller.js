import { getConnection, sql, queries } from "../database";

export const getDetalleProfesor = async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool.request().query(queries.getAllDetProfCurso);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

export const createNewDetalleProfeCurso = async (req, res) => {
    const {id_usuario, id_curso} = req.body; 

    if(id_usuario == null || id_curso == null){
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id_usuario", sql.Int, id_usuario)
        .input("id_curso", sql.Int, id_curso)
        .query(queries.addNewDetProfCurso)

        res.json({id_usuario, id_curso});

    } catch (error) {
        res.status(500).send(error.message);
    }
}

export const getDetalleProfeCursoById = async (req,res) =>{
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool.request()
    .input("id", id)
    .query(queries.getAllDetProfCursoById);
    console.log(result);
    res.send(result.recordset[0]);
}

export const deleteDetalleProfeCursoById = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", id)
    .query(queries.deleteDetProfCursoById)

    res.sendStatus(204);
}

export const updateDetalleProfeCursoById = async (req, res) => {
    const {id_usuario, id_cursos} = req.body; 
    const { id } = req.params; 
    if(id_usuario == null || id_cursos == null){
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    const pool = await getConnection();
    await pool.request()
    .input("id_usuario", sql.Int, id_usuario)
    .input("id_cursos", sql.Int, id_cursos)
    .input("id", sql.Int, id)
    .query(queries.updateDetProfCurso)
    res.json({id_usuario, id_cursos});
}