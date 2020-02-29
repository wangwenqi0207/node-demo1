//如何用node连接mysql数据库   详见web全栈架构师

const http = require('http')

const mysql = require('mysql')

//3306是mysql的默认端口号 user和password是登录mysql的账号
//database是你要查询的库
//SELECT * FROM user_table 是你要查询的表名
//createConnection一次只能处理一个请求
let db = mysql.createConnection({host:'localhost', user:'root', password:'root', database:'user_table'})

//查
// db.query('SELECT * FROM user_table',(err,data)=>{    //user_table是我们建好的数据库名
//      if(err){
//          console.log('发生错误',err)
//      }else{
//          console.log(JSON.stringify(data))  //[{"ID":1,"username":"winter","password":"123456"}]
//      }
// })

//增
let username = "Bob";
let password = '123456';
db.query(`INSERT INTO user_table (username,password) VALUES('${username}','${password}')`,(err,data)=>{    //user_table是我们建好的数据库名
    if(err){
        console.log('发生错误',err)
    }else{
        console.log(JSON.stringify(data))  
    }
})

// JSON.stringify(data)

//写完以后 node sql.js执行
//createPool连接池 可以批量处理  
// let db = mysql.createPool({
//     connectionLimit:10, //最大连接数
//     host:'localhost', port:3306, user:'root', password:'', database:'user_table'
// })