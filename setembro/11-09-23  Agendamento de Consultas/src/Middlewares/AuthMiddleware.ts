import JWT from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"


class AuthMiddleware {
  static async handler(req: Request, res: Response, next: NextFunction) {
    // pegar o token no headers
    const { headers } = req 
    // verificar se existe um token no headers
    if(!headers.authorization) {
      return res.status(401).json(headers.authorization)
    }

    // validar o token
    const [, token] = headers.authorization.split(" ")

    try {
      JWT.verify(token, process.env.JWT_SECRET_KEY as string)
    } catch (err) {
        return res.status(401).json(err)
    }
    // passar pro proximo mid
    next()
  }
}

export { AuthMiddleware }