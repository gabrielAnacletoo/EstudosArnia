import jwt from 'jsonwebtoken';

function CreateToken() {
    const token = jwt.sign({}, process.env.JWT_SECRET_KEY);
    return token;
}

export { CreateToken };


import jwt from 'jsonwebtoken';

function CreateToken(user) {
    const payload = {userId: user};
    const options = {expiresIn: '1h'};
    
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, options);
    return token;
}

export { CreateToken };
