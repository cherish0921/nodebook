let fs=require('fs')


/*
    TODO process.cwd() 输出当前项目的直属文件列表
    例：["chapter4", "chapter5"]
*/
fs.readdir(__dirname,function(err,files){
    console.log('')  //为了更加友好，输出一个空行
    if(!files.length){ //如果files文件夹为空，告知用户当前目录没有文件
        return console.log('    \033[31m 没有可展示的文件了！\033[39m\n')
    }
    console.log('   选择一个文件去展示！\n')
    /*
        TODO files数组中的每一个元素都会执行该函数
        第一种异步流控制模式：串行执行
    */
    function file(i){ 
        let filename=files[i]
        /*
        TODO fs.stat会给出文件或者目录的元数据
        */
        fs.stat(__dirname+'/'+filename,function(err,stat){
            if(stat.isDirectory()){
                console.log('   '+i+'   \033[36m'+filename+'/\033[39m')
            }else{
                console.log('   '+i+'   \033[90m'+filename+'\033[39m')
            }
            i++
            if(i==files.length){
                console.log('')
                process.stdout.write('  \033[33mEnter you choice: \033[39m')
                process.stdin.resume()
                process.stdin.setEncoding('utf8')
            }else{
                file(i)
            }
        })
    }
    file[0]
}) 