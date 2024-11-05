import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';
import cookieParser from 'cookie-parser';
dotenv.config();

const app = express();

// using middlewares
app.use(express.json());
app.use(cookieParser()); //can read token from cookie

const port=process.env.PORT ;

// immporting routes

import userRoutes from "./routes/userRoutes.js"

// using routes

app.use('/api/user', userRoutes);

app.listen(port,()=>{
    console.log(`listening on ${port}`);
    connectDb();
});
