const http=require('http'),qs=require('querystring')

http.createServer((req,res) => {
    let body=''
    req.on('data',(chunk) => {
        body+=chunk
    })
    req.on('end',() => {
        res.writeHead(200)
        res.end('Done')
        console.log(` get name is ${qs.parse(body).name} `)
    })
}).listen(3006,() => {
    console.log(`listen 3006 port `)
}) 