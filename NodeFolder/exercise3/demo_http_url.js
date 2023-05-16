var http = require('http');
const { type } = require('os');
http.createServer(function(req,res){
    res.writeHead(200, {'Content-type':'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);