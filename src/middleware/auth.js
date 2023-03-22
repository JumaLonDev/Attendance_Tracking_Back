import  Jwt  from "jsonwebtoken";

export const verifyToken = function (req, res, next){

    if(!req.headers.authorization) return res.status(401).json('No mi rey, no está autorizado');
    const token = req.headers.authorization.substr(7);

    if(token != ''){
        const content = Jwt.verify(token, process.env.auth_token_key);
        req.data = content; 
        next();
    } else {
        res.status(401).json('No mi rey, token vacío');
    }
} 