import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/posts',postRoutes);

app.use(express.json({limit:"30mb",extentded:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

//memories
//MiJUHswn3zqdBW2

const CONNECTION_URL = 'mongodb+srv://memories:MiJUHswn3zqdBW2@cluster0.elw8g.mongodb.net/memories?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        app.listen(PORT,()=>console.log(`Server running of port: ${PORT}`))
    })
    .catch((err)=>console.log(err.message));

// mongoose.set('useFindAndModify',false);