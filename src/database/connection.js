import sql from "mssql";
import config from "../config";
const deSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    server: config.dbServer,
    database: config.dbDatabase,
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

export { sql };


