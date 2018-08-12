let fs=require('fs')

// TODO 同步获取当前目录的文件列表
console.log(fs.readdirSync(__dirname))

// TODO 异步读取当前目录的文件列表（二）
fs.readdir(__dirname,function(err,files){
    console.log(files)
})