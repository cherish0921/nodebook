let colors=require('colors')
let person=require('./person')

// TODO global 和window一样
console.log('print global.....')
// console.log(global)
// TODO process所有全局执行上下文的内容都在process对象中，在浏览器中，只有一个window对象，但在node中，也只有一个process对象
console.log('print process.....')
console.log(process.tilte)

// TODO 实用的全局对象
// TODO process.nextTick函数相当于setTimeout
console.log('print process.nextTick')
console.log(1)
process.nextTick(function(){
    console.log(3)
})
console.log(2)

/* 
TODO
require() //相对模块 
*/
console.log(`引入先对模块.....`)
let join=new person('韩磊磊')
join.talk()