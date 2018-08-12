const http=require('http')
const fs=require('fs')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'image/jpg'})
    fs.createReadStream('chapter7/hotgame07zh_CN.jpg').pipe(res)
}).listen(3001)
