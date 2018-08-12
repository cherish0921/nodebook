let fs=require('fs')

// fs.createReadStream方法允许为一个文件创建一个可读的Stream对象

// 例子1，不使用stream的例子
fs.readFile('text.txt',function(err,content){
    console.log(content)
})

//每次读取可变大小的内容块，且每次读取后会触发回调函数
let stream=fs.createReadStream('text.txt')

stream.on('data',function(chunk){ //处理文件部分内容
    console.log(chunk)
})

stream.on('end',function(chunk){ //文件读取完毕
    console.log(chunk)
})

