const http=require('http')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'}) //指定头信息
    res.end('Hello <b>World</b>')
}).listen(3000)