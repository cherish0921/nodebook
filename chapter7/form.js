const http=require('http')

http.createServer(function(req,res){
    if(req.url=='/'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(`
            <form action="/url" method="post">
                <p>What is your name?</p>
                <input type="text" name="username">
                <button type="submit">submit</button>
            </form>`
        )
    }else if(req.url=='/url'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end(`You sent a <em>${req.method}</em> request`)
    }   
}).listen(3002,function(){
    console.log(`listen 3002 port`)
})