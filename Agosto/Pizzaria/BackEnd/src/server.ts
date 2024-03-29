import express, { NextFunction, Router, Request, Response } from 'express';
import 'express-async-errors';
import { router } from './routers';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())
app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error) {
        //se for instancia do tipo error
        return res.status(400).json({
            error: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    })
});
app.listen(3333, () => console.log('Server Start at port 33333'));