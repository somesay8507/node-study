var http = require('http');
var fs = require('fs');
var port = 3000;
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});

app.listen(port, function(){console.log(`서버연결되었습니다. \n 주소: http://localhost:${port}/`)});