//读写流

const fs = require('fs')

const zlib = require('zlib')  //压缩


let rs = fs.createReadStream('1.txt');  //将1.txt的内容写入2.txt

let gz = zlib.createGzip();  //将1.txt压缩

let ws = fs.createWriteStream('2.txt.gz')  //压缩后的文件

//rs.pipe(ws)  //通过管道

rs.pipe(gz).pipe(ws);  //执行

//报错时调用的函数  将错误打出
rs.on("error" ,err=>{ 
    console.log(err)
})

// 读写完成时调用的函数
ws.on('finish',()=>{  
    console.log('完成')
})

//Gzip如果配合http服务器使用  需要添加 content-encoding