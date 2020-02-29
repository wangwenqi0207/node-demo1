//读写流

const fs = require('fs')


let rs = fs.createReadStream('1.txt');  //将1.txt的内容写入2.txt

let ws = fs.createWriteStream('2.txt')  //写后生成的文件名

rs.pipe(ws)  //通过管道


//报错时调用的函数  将错误打出
rs.on("error" ,err=>{ 
    console.log(err)
})

// 读写完成时调用的函数
ws.on('finish',()=>{  
    console.log('完成')
})