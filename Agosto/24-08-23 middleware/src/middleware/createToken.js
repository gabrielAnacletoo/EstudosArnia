import jwt from 'jsonwebtoken'


function createToken(req, res){
const token = jwt.sign({} , process.env.JWT_SECRET_KEY)
res.status(200).json(token)
}

export {createToken}