import { getConnection, sql, queries } from "../database";

export const getDetalleCursosEstudiantes = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(queries.getAllDetCurStudent);
        res.json(result.recordset);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

//Crear un nuevo DetalleCursosEstudiantes
export const createNewDCE = async (req, res) => {
    const{id_usuario, id_cursos} = req.body
    if(id_usuario == null || id_cursos == null){
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }

    try {
        const pool = await getConnection();
        await pool.request()
        .input("id_usuario", sql.Int, id_usuario)
        .input("id_cursos", sql.Int, id_cursos)
        .query(queries.addNewDetCurStudent)

        res.json({id_usuario, id_cursos});

    } catch (error) {
        res.status(500).send(error.message);
    }
}

// Traer un DetalleCursosEstudiantes por ID
export const getDCEById = async(req, res) =>{
    const { id } = req.params; 
    const pool = await getConnection(); 
    const result = await pool.request()
    .input("id", id)
    .query(queries.getDetCurStudent);
    console.log(result);
  res.send(result.recordset[0]);
}

// Eliminar un DetalleCursosEstudiantes por ID
export const deleteDCEById = async (req, res) => {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool
    .request()
    .input("id", id)
    .query(queries.deleteDetCurStudent);
  res.sendStatus(204);
}

//Actualizar los datos de un  DetalleCursosEstudiantes por ID
export const updateDCEById = async (req, res) => {
    const{id_usuario, id_cursos} = req.body
    const { id } = req.params;
    if(id_usuario == null || id_cursos == null){
        return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    }
    const pool = await getConnection();
    await pool.request()
    .input("id_usuario", sql.Int, id_usuario)
    .input("id_cursos", sql.Int, id_cursos)
    .input("id", sql.Int, id)
    .query(queries.updateDetCurStudent)

    res.json({id_usuario, id_cursos});
}

export const GetAllCourseByUser = async(req,res) => {
    const { id } = req.params;
    const pool = await getConnection();
    const result = await pool.request()
    .input("id", sql.Int, id)
    .query(queries.GetAllCourseByUser)
    
    res.json(result.recordset);
}