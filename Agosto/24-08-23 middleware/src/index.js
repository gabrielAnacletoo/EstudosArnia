import { config } from 'dotenv'
config()
import  Express  from 'express'
import { DataBase } from './database/DataBase.js'
import { router } from '../src/router.js'

DataBase.initialize();
const app = Express();
/* 
A ordem das chamadas de app.use() é importante, pois os middlewares são 
executados na ordem em que são definidos. Dessa forma, o middleware de logs será executado primeiro
para registrar as informações de log antes que a lógica das rotas seja processada.
Aqui está como você poderia adicionar o middleware de logs após o Express.json() e antes do router:
*/
//Middleware de logs

app.use(Express.json())
// app.use((req, res,next) => {
//     console.log('Host:', req.hostname);
//     console.log('HTTP Method:', req.method);
//     console.log('Body:', req.body);
//     console.log('Headers:', req.headers);
//     console.log('Params:', req.params);
//     console.log('Query:', req.query);
// next();
// })
app.use(router);

app.listen(3333, () => console.log('Server Start: OK'))


