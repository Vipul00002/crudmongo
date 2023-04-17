import * as dotenv from 'dotenv'
dotenv.config()
import {Router} from '../core/routes/Routes.js'
import { connectDB } from '../core/database/index.js';
import  bodyParser from 'body-parser'
connectDB();
import express from 'express'
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const port=process.env.PORT || 8080
app.use('/',Router);
app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})