

import jwt from 'jsonwebtoken';



const AuthMiddleWare = (req, res , next) => {
    const { headers } = req

    if(!headers.authorization){
        return res.status(401).json({ error: true, message: "Not Authorized"})
    }

    //validar token
    const [ , token] = headers.authorization.split(" ");

    try {
        jwt.verify(token)
    } catch (error) {
        return res.status(401).json({message: 'Not Authorized'});
    }
    next();
};

export {AuthMiddleWare}