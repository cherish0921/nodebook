const request=require('superagent')

request.get('http://twitter.com/search.json').send({
    q:'justin bieber' //将其编码为查询字符串来作为URL一部分
}).set(
    'Date',new Date().getTime() //设置请求头信息
).end((res) => {
    console.log(res)
})