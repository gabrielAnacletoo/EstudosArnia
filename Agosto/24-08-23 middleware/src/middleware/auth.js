/*

O código que você compartilhou parece estar no caminho certo, 
mas com uma ressalva: é importante colocar o next() antes da resposta (res) 
dentro do bloco if(userAuth). Isso porque, se você enviar uma resposta 
antes de chamar o next(), a requisição será encerrada ali e o fluxo não passará 
para a próxima rota ou middleware.

*/

//app.use nome do middleware ele funciona globalmente 

import { loggerTeste } from "../logger.js";
import jwt from 'jsonwebtoken'

const AuthMiddleWare = (req, res, next) => {
  const { headers } = req

    if (!headers.authorization) {
      return res.status(401).json({ error: true, message: "Not authorized" })
    }
    
    const [ , token ] = headers.authorization.split(" ")


    try {
      const secretKey = process.env.JWT_SECRET_KEY
       jwt.verify(token, secretKey)
    } catch (error) {
      return res.status(401).json({message: 'Not Authorized'});
    }
    next();
};
  

export { AuthMiddleWare };
