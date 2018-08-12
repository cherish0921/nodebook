const path=require('path'); 
const session=require('koa-session'); //koa session中间件
const koa=require('koa'); //koa
const router=require('./public/routes');
const bodyparser=require('koa-bodyparser'); //koa 解析前端ajax请求数据
const views=require('koa-views'); //koa 解析html template模板
const static=require('koa-static'); //koa 静态资源管理
const logger=require('koa-logger'); //koa log日志插件
const app=new koa()
const port=3001; //程序端口

const sessionopt={ //session配置项
    key:'user', //cookie key
    maxAge: 86400000, //最大缓存时间 1天
    overwrite: true,  //是否重写session
    httpOnly: true, 
    signed: true, 
    rolling: false, 
    renew: false
}

app.use(session(sessionopt,app))

app.use(bodyparser({ //前端ajax请求解析配置
    enableTypes:['json','form','text']
}))

app.use(views(path.join(__dirname,'./public/views'),{ //配置前端页面渲染模板
    extension: 'ejs',
    map: { html: 'ejs' }
}))
 
app.use(static(path.join(__dirname,'./public/static'),{ //配置前端静态资源路径(图片，js,字体等)
    // maxAge:3600000, //前端缓存1小时cache
    gzip:true //读取gzip资源
}))

app.use(router.routes()).use(router.allowedMethods()); //使用

app.use(logger())

app.listen(port, () => {
    console.log(`listen ${port} port`)
})
