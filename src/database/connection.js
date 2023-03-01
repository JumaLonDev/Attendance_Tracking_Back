import sql from "mssql";

const deSettings = {
    user: "Attendance_Tracking",
    password:"attendance2023",
    server: "localhost",
    database:"Attendance_Tracking",
    options:{
        ecrypt:true, 
        trustServerCertificate: true,
    },
};

export async function getConnection(){
    try {
        const pool = await sql.connect(deSettings);
        return pool;
    } catch (error) {
        console.error(error);
        
    }
}


