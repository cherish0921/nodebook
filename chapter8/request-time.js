/*
*请求时间中间件
*
*选项：
*   -time(Number)：超时阀值(默认100)
*/

module.exports=function(opts){
    let time=opts.time||100
    return function(req,res,next){
        let timer=setTimeout(() => {
            console.log(req.method,req.url)
        },time)
        var end=res.end
        res.end=function(chunk,encoding){
            res.end=end
            res.end(chunk,encoding)
            clearTimeout(timer)
        }
        next()
    }
}