const cors=require('cors');
const mongoose=require('mongoose');
const express=require('express');
require('dotenv').config();
const path=require('path');

const app=express();
const port=process.env.PORT || 5000

app.use(cors());
app.use(express.json());

const uri=process.env.MONGODB_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log('MongoDB connection established successfully');
});

if(process.env.NODE_ENV==='production'){
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'build/index.html'));
    });
}

const userRouter=require('./routes/user');

app.use('/',userRouter);

app.listen(port, ()=>{
    console.log('Server is running on port: ',port);
});