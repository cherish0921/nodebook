const router=require('koa-router')();

router.get('/', async (ctx) => {
    await ctx.render('index')
}).post('/usersigin', (ctx) => {
    let {user,psd}=ctx.request.body
    ctx.session.username=user
    ctx.session.userpsd=psd
    console.log(ctx.session)
})


module.exports=router