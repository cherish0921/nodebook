const server=require('http');
const fs=require('fs')

server.use(function(req,res,next){
    // 记录日志
    console.error(' %s %s ',req.method,req.url)
    next()
})

server.listen(1001)