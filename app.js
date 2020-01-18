var express = require('express');
var path = require("path");
var config = require("./config");
var app = express();

var index = require("./routes/index");

// app.use('/',function(req,res){
//     res.send("hello workd");
//     res.end();
// });
app.use('/',index);

// app.use('/',(req,res))

if(!module.parent){
    app.listen(config.port, function(){
        console.log(`hello server is running on port  ${config.port}`)
    })
}
module.exports = app