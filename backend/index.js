import express from 'express';
import dotenv from 'dotenv';
import connectDb from './database/db.js';

dotenv.config();

const app = express();

const port=process.env.PORT ;

// immporting routes

import userRoutes from "./routes/userRoutes.js"

// using routes

app.use('/api/users', userRoutes);

app.listen(port,()=>{
    console.log(`listening on ${port}`);
    connectDb();
});
