const express = require('express');
const router = express.Router();
const toDo = require('../models/toDo');
const controller = require('../controllers/controller')

const bodyParser = require('body-parser');
const { req } = require('express/lib/response');
const jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', controller.getIssues);
router.get('/create', controller.getCreate);
router.get('/notes', controller.getNotes);
router.post('/create', urlencodedParser, controller.postCreate);
router.post('/change', urlencodedParser, controller.postChange);

module.exports = router;
 