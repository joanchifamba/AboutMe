var express = require('express');
var app = express();
const path =require('path');


app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/submit-data', function(req,res){
    res.send("name:  "+req.body.name+ "||| OK: " +  req.body.OK);
});

var server = app.listen(8080, function(){
    console.log('Node server is running..');
})
