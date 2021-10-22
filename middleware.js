
let colors = require('colors');


module.exports = {requestTime, logger};

 function requestTime(req, res, next){

    req.requestTime = Date.now();
    next();
}

 function logger(req, res, next){

    console.log(colors.bgCyan.red(`req.time ${req.requestTime}`));
    
}