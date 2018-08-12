const http=require('http')

http.createServer(function(req,res){
    // console.log(req.url)  //请求路径
    // console.log(req.method)  // 请求方式
    if(req.url=='/'&&req.method=='GET'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(`
            <form action="/url" method="post">
                <p>What is your name?</p>
                <input type="text" name="username">
                <p>your age?</p>
                <input type="text" name="age">
                <button type="submit">submit</button>
            </form>
        `)
    }else if(req.url=='/url'&&req.method=='POST'){
        // console.log(req.headers['content-type']) 输出Content-type
        let body=''
        req.on('data',(chunk) => { // 监听data事件
            body+=chunk
        })
        req.on('end',() => { // 监听end事件
            res.writeHead(200,{'Content-type':'text/html'})
            res.end(`
                <p>Content-type：${req.headers['content-type']}</p>
                <p>requestbody：${body}</p>
            `)
        })
    }
}).listen(3003,() => {
    console.log(`listen 3003 port`)
})