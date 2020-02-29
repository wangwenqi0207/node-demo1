const http = require('http')

http.createServer((req,res)=>{

    let arr =[];
    req.on('data',buffer=>{
        arr.push(buffer)
    });
    req.on('end',()=>{
        let buffer = Buffer.concat(arr)
        console.log(buffer)
    });

}).listen(8080);