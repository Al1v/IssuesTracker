const express = require('express');
const router = express.Router();
const toDo = require('../models/toDo');
const controller = require('../controllers/controller')

const bodyParser = require('body-parser');
const { req } = require('express/lib/response');
const jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

class Controller{
    async getIssues(req , res){
        try{
            const todos = await toDo.find({});
        
            res.render('index',{
                title: 'main page',
                active: 'main',
                todos,
                
            });
        }catch(e){
            console.log(e);
        }
    };

    async getCreate(req, res){
        res.render('create',{
            title: 'create',
            errMsg: "",
        });
    };

    async getNotes(req, res){
        res.render('notes',{
            title: 'notes',
            errMsg: "",
        });
    };

    async postCreate(req, res){
        try{
            const todo = new toDo({
                title: req.body.title,
                description: req.body.description,
            });
            await todo.save();
            res.redirect('/');

        }catch(e){
    
            let errMsg = e.message.slice(e.message.indexOf("failed") + 7);
            res.render('create',{
                title: 'create',
                active: 'create',
                errMsg,
            });
           
            console.log(errMsg);
    
        }
    };

    async postChange(req ,res){
        try{
            const todo = await toDo.findById(req.body.id);
    
            if(todo.state == 'pending'){
                todo.state = 'completed';
            }
            if(todo.state == 'open'){
                todo.state = 'pending';
            }
    
            await todo.save();
            res.redirect('/');
    
        }catch(e){
            console.log(e);
        }
    };
}


module.exports = new Controller();