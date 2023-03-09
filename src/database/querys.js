export const queries =  {
    getAllUsers: 'SELECT * FROM tbl_usuarios',
    addNewUser: "INSERT INTO tbl_usuarios (nombre, apellido, correo,correo_respaldo, num_documento, num_contrato, num_contacto,id_rol, contrasena) VALUES (@nombre, @apellido, @correo, @correo_respaldo, @num_documento, @num_contrato, @num_contacto, @id_rol, @contrasena)", 
    getUserById: "SELECT * FROM tbl_usuarios WHERE id_usuario = @id",
    deleteUser: "DELETE [Attendance_Tracking].[dbo].[tbl_usuarios] WHERE id_usuario = @id", 
    getTotalUsers: "SELECT count(*) FROM [Attendance_Tracking].[dbo].[tbl_usuarios]",
    updatetUserById: "UPDATE tbl_usuarios SET  nombre = @nombre, apellido = @apellido, correo = @correo, correo_respaldo = @correo_respaldo, num_documento = @num_documento, num_contrato = @num_contrato, num_contacto = @num_contacto, id_rol = @id_rol, contrasena = @contrasena  WHERE id_usuario = @id"
}