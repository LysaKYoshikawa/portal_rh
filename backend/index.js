const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors({
    origin:'*',

}));

const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/BACKEND");
// mongodb://localhost:27017


const registerRouter = require('./src/routes/registerRoute');
app.use('/api', registerRouter);

app.listen(8001,function(){
    console.log('Rodando na porta 8001')
});