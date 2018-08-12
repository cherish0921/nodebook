const qs=require('querystring');
const http=require('http');

// let search=process.argv.slice(2).join(' ').trim()

// if(!search.length){
//     return console.log('\n Usage:：node tweets <search term>\n')
// }
// console.log('\n searching for: '+search+ ' \n')

http.request({
    host:'search.twitter.com',
    path:`/search.json?${qs.stringify({q:'Justin Bieber'})}`,
    method:'GET'
},function(res){
    let body=''
    res.setEncoding('utf8')
    res.on('data',(chunk) => {
        body+=chunk
    })
    res.on('end',() => {
        let obj=JSON.parse(body)
        console.log(obj)
    })
}).end()