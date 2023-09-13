import express from 'express'
import bodyParser from 'body-parser'
import logger from 'morgan'
import cors from 'cors'
import dotenv from 'dotenv'
import Connection from './Model/Connection.js'
import AdminRouter from './Routes/AdminRouter.js'
import TruckDriverRouter from './Routes/TruckDriverRouter.js'

dotenv.config();


const app=express()
const port=process.env.PORT
const router=express.Router()
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  Connection()


  //Routes
  router.use('/admin',AdminRouter)
  router.use('/driver',TruckDriverRouter)