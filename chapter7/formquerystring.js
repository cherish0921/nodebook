const qs=require('querystring');
const http=require('http');

http.createServer(function(req,res){
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
        let body=''
        req.on('data',(chunk) => {
            body+=chunk
        })
        req.on('end',() => {
            let response=qs.parse(body)
            res.writeHead(200,{'Content-type':'text/html'})
            res.end(`
                <p>Content-type:${req.headers['Content-type']}</p>
                <p>username:${response.username}</p>
                <p>age:${response.age}</p>
            `)
        })
    }else{
        res.writeHead(404)
        res.end('404 not found!')
    }
}).listen(3004,() => {
    console.log(`listen 3004 port`)
})