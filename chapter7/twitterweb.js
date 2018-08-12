const http=require('http')

http.request({
    host:'127.0.0.1',
    port:3005,
    url:'/',
    method:'GET'
},function(res){
    let body=''
    res.on('data',(chunk) => {
        body+=chunk
    })
    res.on('end',() => {
        console.log(`输出的响应消息：`)
        console.log(body)
    })
}).end()