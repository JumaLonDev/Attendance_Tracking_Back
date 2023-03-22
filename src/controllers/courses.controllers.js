import { getConnection, sql, queries } from "../database";

export const getCourses = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllCourses);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewCourse = async (req, res) => {
  const { num_curso, nom_curso, jornada_curso, prof_curso } = req.body;

  if (
    num_curso == null ||
    nom_curso == null ||
    jornada_curso == null ||
    prof_curso == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("num_curso", sql.NVarChar, num_curso)
      .input("nom_curso", sql.NVarChar, nom_curso)
      .input("prof_curso", sql.Int, prof_curso)
      .input("jornada_curso", sql.NVarChar, jornada_curso)
      .query(queries.addNewCourse);

    res.json({
      num_curso,
      nom_curso,
      jornada_curso,
      prof_curso,
    });
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getCourseById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.getCourseById);
  console.log(result);
  res.send(result.recordset[0]);
};

export const deleteCourseById = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.deleteCourseById);
  res.sendStatus(204);
};

export const getTotalCourses = async (req,res) => {
  const pool = await getConnection(); 
  const result = await pool.request().query(queries.getTotalCourses);
  console.log(result);

  res.json(result.recordset[0][""]);
};

export const updateCoursesById = async (req, res) => {
  const { num_curso, nom_curso, prof_curso} = req.body;
  const { id } = req.params;
  if (
    num_curso == null ||
    nom_curso == null ||
    jornada_curso == null ||
    prof_curso == null
  ) {
    return res.status(400).json({ msg: "Bad Request. Please fill all fields" });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input("num_curso", sql.NVarChar, num_curso)
    .input("nom_curso", sql.NVarChar, nom_curso)
    .input("jornada_curso", sql.NVarChar, jornada_curso)
    .input("prof_curso", sql.Int, prof_curso)
    .input("id", sql.Int, id)
    .query(queries.updateCourseById);

    res.json({
      num_curso,
      nom_curso,
      jornada_curso,
      prof_curso
    });
};

export const GetUserByIdCourse = async (req, res) => {
  const { id } = req.params;
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", id)
    .query(queries.GetUserByIdCourse);
  console.log(result);
  res.send(result.recordset);
}


