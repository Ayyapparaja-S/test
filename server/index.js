import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({path: './config.env'})
import app from './app.js';

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log('DB connected Successfully')
}).catch((e)=> console.error('connection error', e))


const PORT = process.env.PORT || 5000;
const HOST = process.env.HOST || 'localhost'
app.listen(PORT, HOST, ()=> console.log(`Server running at port: ${PORT}`));