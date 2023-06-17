import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js'

//We can write like above as well in latest in express need to change in package.json file
//below main need to add this type:"module"

const app = express();
//use express middlewareto connect this to app

//  /posts is starting point 



app.use(bodyParser.json({limit: "30mb",extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb",extended: true}));

app.use(cors());

app.use('/posts', postRoutes);



//connect server app to db 
//host our db on their cloud 
//https://www.mongodb.com/cloud/atlas 

const CONNECTION_URL = 'mongodb+srv://Ravalidb:qp8wVX0DG7utATQE@cluster0.txbjaaw.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    app.listen(PORT,()=>{
        //callback executes when app successfuly listens 
        console.log(`Servr is running on ${PORT}`)
    })
}).catch((error)=>console.log(error))

//  mongoose.set('useFindAndModify',false);

