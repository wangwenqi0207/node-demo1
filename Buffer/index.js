//使用buffer.length返回占用的字节长度

var str = 'Hello world';
var buf = Buffer.from(str)

console.log(buf)  //<Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>

console.log(buf.length)  //11

buf = Buffer.from('哈哈')  
console.log(buf.length)   //6


//使用Buffer转MP3文件