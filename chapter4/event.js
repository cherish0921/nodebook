let eventemiter=require('events').EventEmitter
let a=new eventemiter()

a.on('event',function(){
    console.log('开始执行event的事件')
})

a.emit('event')