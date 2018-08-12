const http=require('http');
const fs=require('fs');

http.createServer((req,res) => {
    console.error('  %s %s ',req.method,req.url)
    if('GET'==req.method&&'/images'==req.url.substr(0,7)&&'.png'==req.url.substr(-4)){ //获取到图片
        fs.stat(__dirname+req.url,function(err,stat){ //使用__dirname获取当前服务器的路径
            if(err||!stat.isFile()){ //不能读取图片时
                res.writeHead(400)
                res.end('Not found')
                return
            }
            serve(__dirname+req.url,'application/jpg') //返回图片信息
        })
    }else if('GET'==req.method&&'/'==req.url){ //读取首页
        serve(__dirname+'/index.html','text/html')
    }else{
        res.writeHead(404)
        res.end('Not found')
    }
    function serve(path,type){ //根据文件路径来获取文件，并添加必不可少的Content-type头信息
        res.writeHead(200,{'Content-Type':type})
        fs.createReadStream(path).pipe(res);
    }
}).listen(1000)