const router=require('koa-router')();

router.get('/', async (ctx) => {
    await ctx.render('index')
}).post('/usersigin', (ctx) => {
    console.log(ctx.request.body)
})


module.exports=router