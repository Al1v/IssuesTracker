
const  {requestTime, logger} = require('./middleware.js');
const ejs = require('ejs');
const serverRoutes = require('./routes/server.js');
const express = require('express');
const path = require('path');
const mongoose = require ('mongoose');


const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'static')));
app.use(serverRoutes);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'ejs'));

start();

app.get('/download',(req, res)=>{
    //res.send('<h1>WTF</h1>')
     //console.log(req.requestTime);
     req.logger;
     res.send('<h1>download started</h1>');
    // res.download(path.join(__dirname, 'static', 'index.html'));
  });

  async function start(){
    try{
        await mongoose.connect('mongodb+srv://al1v:12358@cluster0.ckhc3.mongodb.net/todos',{
            useNewUrlParser: true,
            //useFindAndModify: false
        });
        app.listen(PORT, () => {
            console.log('server started');
        });

    }catch(err){
      console.log(err);
    }
 
}

