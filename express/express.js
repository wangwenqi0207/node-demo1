//使用express框架搭建服务器 在页面输出hello world

var express = require('express');
var app = express();
 
//Express 应用使用回调函数的参数： request 和 response 对象来处理请求和响应的数据。
//request 对象表示 HTTP 请求
//req.get()：获取指定的HTTP请求头

//get是请求方式 /是页面路径 req是客户端请求 res是客户端返回
app.get('/', function (req, res) {
   console.log(req)
   res.send('Hello World');  //send相当于原生的write
})
 

var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log(server.address())
  console.log(port)
 
})

