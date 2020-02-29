//glob包可递归获取文件名
//npm init  生成npm
//npm install glob   安装glob
const glob = require('glob')

//阻塞io  在以下的程序进行中的时间里 程序是不能做其他事的

var result = null;
console.time('glob')  //打出glob执行的时间
result = glob.sync(__dirname + '/**/*')  //获取当前终端文件夹下所有的文件目录
console.timeEnd('glob')   //glob: 52.255ms
// console.log(result)  


//非阻塞  执行速度变快 在执行这个任务时 还能执行其他的同步任务
var result2 = null
console.time('glob') 
glob(__dirname + '/**/*', function(err,res){
    result2 = res;
    // console.log(result2)
    console.log("我是非阻塞")
})
console.timeEnd('glob')  //glob: 4.359ms