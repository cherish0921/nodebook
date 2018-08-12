const connect=require('connect')
const server=() => createServer.Server

server.use(connect.static(__dirname)).listen(1001)