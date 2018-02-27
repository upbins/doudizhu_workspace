const socket = require('socket.io');
const app = socket('23333');//监听的端口
//用户连接
app.on('connection',function (socket) {
  console.log('a user connected');
  socket.emit("login","hello world");
  socket.on("login",function(data) {
    console.log("a user login = " + JSON.stringify(data))
  })
})
console.log("listen on 23333");