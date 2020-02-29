//以上都是node可以识别的

console.log('hello world')
console.log(Math)
console.log(Date)

console.log(setTimeout)
console.log(setInterval)

//filename是当前运行的脚本所在的位置

console.log('当前运行的脚本所在的位置', __filename);
console.log('运行脚本所在的目录位置',__dirname);

console.log('运行nodejs的进程信息',process)