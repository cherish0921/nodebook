// TODO stdin定义输入流，stdout定义输出流
// stats 避免再次执行fs.stat，将stat对象保存下来
let fs=require('fs'),stdin=process.stdin,stdout=process.stdout,stats=[]

function file(i){
    let filename=files[i]
    fs.stat(__dirname+'/'+filename,function(err,stat){
        stats[i]=stat
        if(stat.isDirectory()){
            console.log('   '+i+'   \033[36m'+filename+'/\033[39m')
        }else{
            console.log('   '+i+'  033[90m'+filename+'\033[39m')
        }
        if(++i==files.length){
            read()
        }else{
            file(i)
        }
    })
}

function read(){
    console.log('')
    stdout.write('  \033[33mEnter your choice:  \033[39m');
    stdin.resume()
    stdin.setEncoding('utf8')
    stdin.on('data',option)
}

function option(data){
    let filename=files[Number(data)]
    if(stats[Number(data)].isDirectory()){
        fs.readdir(__dirname+'/'+filename,function(err,files){
            console.log('')
            console.log('   ('+files.length+'   files)')
            files.forEach(function(file){
                console.log('   -   '+file)
            })
            console.log('')
        })
    }else{
        stdin.pause()
        fs.readFile(__dirname+'/'+filename,'utf8',function(err,data){ //TODO 指定编码，得到相应的字符串
            console.log('')
            console.log('\033[90m'+data.replace(/(.*)/g,'   $1')+'\033[39m'); // TODO 添加辅助缩进将内容进行输出
        })
    }
}
