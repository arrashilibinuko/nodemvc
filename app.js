var express = require('express');
var path = require("path");
var config = require("./config");
var app = express();

// app.use('/',(req,res))

if(!module.parent){
    app.listen(config.port, function(){
        console.log(`hello server is running on port  ${config.port}`)
    })
}
module.exports = app