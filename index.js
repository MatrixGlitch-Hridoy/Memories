import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(express.json({limit:"30mb",extentded:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//Route
app.use('/posts',postRoutes);
app.get('/',(req,res)=>{
    res.send('Hello to memory API');
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>console.log(`Server running of port: ${PORT}`))
    })
    .catch((err)=>console.log(err.message));

// mongoose.set('useFindAndModify',false);