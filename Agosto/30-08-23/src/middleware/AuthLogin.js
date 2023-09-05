import { CreateToken } from "./GenerateToken.js";


const LoginMiddleware = (req, res, next) => {
  const {email, password} = req.body;
  

}



return {
    error: true,
    message: "User does not exist",
    status: 400
};