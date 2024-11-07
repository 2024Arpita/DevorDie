// index.js m server banaya h 
import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import cookieParser from 'cookie-parser';
import cloudinary from "cloudinary";

dotenv.config(); //dotenv k saare variables ko read krne k liye


cloudinary.v2.config({
    cloud_name: process.env.Cloud_Name,
    api_key: process.env.Cloud_Api,
    api_secret: process.env.Cloud_Secret,
  });

const app = express();
// using middlewares
app.use(express.json()); //to get access of data  coming from post request to route
app.use(cookieParser()); //can read token data from cookie

const port=process.env.PORT ;  //.env file se port milega

// immporting routes

import userRoutes from "./routes/userRoutes.js"

// using routes

app.use('/api/user', userRoutes); 

app.listen(port,()=>{
    console.log(`listening on ${port}`);
    connectDb();
});
