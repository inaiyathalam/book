import express from "express";
import {PORT, mongoDBURL} from "./config.js"
import mongoose from 'mongoose';
import cors from "cors";
import { Book } from "./models/bookModel.js";
import booksRoute from './routes/booksRoute.js'
const app = express();
app.use(express.json())
// app.cors()
app.use(
    cors({
    origin: 'http://localhost:5555',
    methods:['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders:['Content-Type'],
})
)
app.get('/', (req, res)=>{
    return res.status(234).send("Welcome to Mern Stack Tutorial");
     
})
app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(()=>{
    console.log('App connected to Database');
    app.listen(PORT, ()=>{
        console.log(`Server is listening at ${PORT}`);
    });
    
}).catch((error)=>{
    console.log(error)
})
