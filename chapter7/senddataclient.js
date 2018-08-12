const http=require('http'),qs=require('querystring')

function send(thename){
    http.request({
        host:'127.0.0.1',
        port:3007,
        url:'/',
        method:'GET'
    },function(res){
        res.setEncoding('utf8')
        res.on('end',() => {
            console.log('\n request complare! ')
            process.stdout.write('\n your name: ')
        })
    }).end(qs.stringify({name:thename}))
}
process.stdout.write('\n your name: ')
process.stdin.resume()
process.stdin.setEncoding('utf8')
process.stdin.on('data',function(name){
    send(name.replace('\n',''))
})