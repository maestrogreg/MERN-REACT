import express, {Request, Response, NextFunction} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import mongoose from 'mongoose'
import logger from 'morgan'
import {connect} from './database/connection'
import studentsRoute from './routes/student'
import dotenv from 'dotenv'
dotenv.config();

//database connection
connect();

const app = express();

app.use(express.json());
app.use(express.urlencoded({limit:"20mb", extended:true}))
app.use(cors())
app.use(logger('dev'));

app.get('/', (req:Request, res:Response)=> {
    res.status(200).send('welcome')
})
app.use('/student', studentsRoute)


const port = process.env.PORT || 3060;

app.listen(port,()=>{
    console.log(`server is live on http://localhost:${port}`)
})
