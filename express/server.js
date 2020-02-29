//渲染html页面  加载静态资源

var express = require('express');   //引入express框架
var app = express();
 

//加载项目里的静态资源 例如css js 图片等
app.use('/public', express.static('public'));

//使用get请求接收 默认路径加载 index.html这个文件
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

// 请求url  用query方法获取用户输入的值 用户传值会携带在url上
app.get('/process_get', function (req, res) {
   // 输出 JSON 格式
   // console.log(res);
   var response = {
       "first_name":req.query.first_name,
       "last_name":req.query.last_name
   };
   console.log(response);  //拿到用户的值
   res.end(JSON.stringify(response)); //并转为json { first_name: 'wang', last_name: 'winter' }
})
 

//搭建一个express服务器 端口3000
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为", host, port)
 
})