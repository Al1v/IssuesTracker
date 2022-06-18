
const ejs = require('ejs');
const serverRoutes = require('./routes/server.js');
const express = require('express');
const path = require('path');
const mongoose = require ('mongoose');
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(serverRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'ejs'));

start();


  async function start(){
    try{
        await mongoose.connect(process.env.DB,{
            useNewUrlParser: true,

        });
        app.listen(PORT, () => {
            console.log('server started');
        });

    }catch(err){
      console.log(err);
    }
 
}

