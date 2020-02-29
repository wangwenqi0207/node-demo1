var express = require('express');
let  server = express();
server.listen(8080);

server.get('/a',(req,res,next)=>{
    console.log('a')
    req.num = 5; //传参方法
    next(); //是否要进行后面的请求
})

server.get('/a',(req,res,next)=>{
    console.log(req.num)
})


//get('url',fn);
//post('url',fn);
//use('url',fn); //什么请求方法都能接收

//server.use(express.static('./src/')) 写在最后面 默认最后请求src下面的文件路径