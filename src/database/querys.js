export const queries =  {
    //Queries de los usuarios
    getAllUsers: 'SELECT * FROM tbl_usuarios',
    addNewUser: "INSERT INTO tbl_usuarios (nombre, apellido, correo, correo_respaldo, num_documento, num_contrato, num_contacto,id_rol, contrasena, estado_usuario) VALUES (@nombre, @apellido, @correo, @correo_respaldo, @num_documento, @num_contrato, @num_contacto, @id_rol, @contrasena, @estado_usuario)", 
    getUserById: "SELECT * FROM tbl_usuarios WHERE id_usuario = @id",
    deleteUser: "DELETE [Attendance_Tracking].[dbo].[tbl_usuarios] WHERE id_usuario = @id", 
    getTotalUsers: "SELECT count(*) FROM [Attendance_Tracking].[dbo].[tbl_usuarios]",
    updatetUserById: "UPDATE tbl_usuarios SET  nombre = @nombre, apellido = @apellido, correo = @correo, correo_respaldo = @correo_respaldo, num_documento = @num_documento, num_contrato = @num_contrato, num_contacto = @num_contacto, id_rol = @id_rol, estado_usuario = @estado_usuario  WHERE id_usuario = @id",
    getUserByEmail: 'SELECT * FROM tbl_usuarios WHERE correo = @correo',

    //Queries de los cursos
    getAllCourses: 'SELECT * FROM tbl_cursos',
    addNewCourse: 'INSERT INTO tbl_cursos (num_curso, nom_curso, jornada_curso,prof_curso) VALUES (@num_curso, @nom_curso,@jornada_curso, @prof_curso)',
    getCourseById: 'SELECT * FROM tbl_cursos WHERE id_curso = @id',
    deleteCourseById: 'DELETE [Attendance_Tracking].[dbo].[tbl_cursos] WHERE id_curso = @id',
    getTotalCourses:"SELECT count(*) FROM [Attendance_Tracking].[dbo].[tbl_cursos]",
    updateCourseById: "UPDATE tbl_cursos SET num_curso = @num_curso, nom_curso = @nom_curso, jornada_curso = @jornada_curso, prof_curso = @prof_curso, WHERE id_curso = @id",
    GetUserByIdCourse: "SELECT c.*, u.id_usuario, u.nombre, u.apellido FROM tbl_cursos c INNER JOIN tbl_dtll_cur_estu de ON c.id_curso = de.id_cursos INNER JOIN tbl_usuarios u ON u.id_usuario = de.id_usuario WHERE c.id_curso = @id ",

    //Queries de los PQRS

    getAllPqrs: 'SELECT * FROM tbl_pqrs ',
    addNewPqrs: 'INSERT INTO tbl_pqrs (id_usuario,text_pqrs, tipo_pqrs) VALUES (@id_usuario,@text_pqrs, @tipo_pqrs)',
    getPqrsById: 'SELECT * FROM tbl_pqrs WHERE id_pqrs = @id',
    deletePqrsById: 'DELETE [Attendance_Tracking].[dbo].[tbl_pqrs] WHERE id_pqrs = @id',
    getTotalPqrs: "SELECT count(*) FROM [Attendance_Tracking].[dbo].[tbl_pqrs]",
    updatePqrsById: "UPDATE tbl_pqrs SET text_pqrs = @text_pqrs WHERE id_pqrs = @id",
    GetPqrsByUser: "SELECT p.*, u.nombre, u.apellido, u.num_documento FROM tbl_pqrs p INNER JOIN tbl_usuarios u ON p.id_usuario = u.id_usuario WHERE p.id_usuario = @id",
    


    //Queries de la toma de asistencia 

    getAllAnttendance: 'SELECT * FROM tbl_asistencias', 
    addNewAttendace: 'INSERT INTO tbl_asistencias (f_inasistencia, observacion, id_curso, id_usuario, c_inasistencia) VALUES (@f_inasistencia, @observacion, @id_curso, @id_usuario, @c_inasistencia)',
    getAllAnttendanceById: 'SELECT * FROM tbl_asistencias WHERE id_asistencia = @id',
    deleteAttendanceById: 'DELETE [Attendance_Tracking].[dbo].[tbl_asistencias] WHERE id_asistencia = @id',
    updateAttendanceById: 'UPDATE tbl_asistencias SET f_inasistencia = @f_inasistencia, observacion = @observacion, id_curso = @id_curso, id_usuario = @id_usuario, c_inasistencia = @c_inasistencia WHERE id_asistencia = @id',

    //Detalle profesor cursos

    getAllDetProfCurso: 'SELECT * FROM dtll_prof_cur',
    addNewDetProfCurso: 'INSERT INTO dtll_prof_cur (id_usuario, id_cursos) VALUES (@id_usuario, @id_curso)',
    getAllDetProfCursoById: 'SELECT * FROM dtll_prof_cur WHERE id = @id', 
    deleteDetProfCursoById: 'DELETE [Attendance_Tracking].[dbo].[dtll_prof_cur] WHERE id = @id',
    updateDetProfCurso: 'UPDATE  dtll_prof_cur SET id_usuario = @id_usuario, id_cursos = @id_cursos WHERE id = @id ',
    GetAllCourseByUser:'SELECT c.* FROM tbl_usuarios u INNER JOIN tbl_dtll_cur_estu de ON u.id_usuario = de.id_usuario INNER JOIN tbl_cursos c ON c.id_curso = de.id_cursos WHERE u.id_usuario = @id',

    //Detalles cursos estudiantes 

    getAllDetCurStudent: 'SELECT * FROM tbl_dtll_cur_estu',
    addNewDetCurStudent: 'INSERT INTO tbl_dtll_cur_estu (id_usuario, id_cursos) VALUES (@id_usuario, @id_cursos)',
    getDetCurStudent: 'SELECT * FROM  tbl_dtll_cur_estu WHERE id_detalle_es = @id',
    deleteDetCurStudent:'DELETE [Attendance_Tracking].[dbo].[tbl_dtll_cur_estu] WHERE id_detalle_es = @id',
    updateDetCurStudent:'UPDATE tbl_dtll_cur_estu SET id_usuario = @id_usuario, id_cursos = @id_cursos  WHERE id_detalle_es = @id',
    getCurseByUserStudent: 'SELECT * FROM tbl_cursos WHERE num_curso = @cod_cursos',
}