const express = require('express');
const router = express.Router();
const toDo = require('../models/toDo');

const bodyParser = require('body-parser');
const bp = require("body-parser");
const jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', async (req, res) => {
    const todos = await toDo.find({});
    res.render('index',{
        title: 'main page',
        active: 'main',
        todos,
    });
});

router.get('/create', (req, res) => {
    res.render('create',{
        title: 'create',
        active: 'create'});
});

router.post('/create', urlencodedParser, async (req, res) => {
    console.log(req.body);
    const todo = new toDo({
        title: req.body.title
    });
   await todo.save();
   res.redirect('/');
});


router.post('/complete', urlencodedParser, async (req, res) => {
    console.log(req.body);
const todo = await toDo.findById(req.body.id);
console.log(!!req.body.completed);
todo.completed = !!req.body.completed;
await todo.save();
res.redirect('/');

    });

    router.get('/test', async (req, res) => {
        const todos = await toDo.find({});
        for (let i of todos){
            console.log(JSON.stringify(i));
        }
    });
 
   
module.exports = router;
 