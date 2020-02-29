//通过require引用js文件运行

// console.log('开始require')
// var lib = require('./lib.js')
// console.log('结束require',lib)

var playerAction = process.argv[process.argv.length - 1];
var game = require('./lib.js')

process.stdin.on('data',(buffer)=> {
    const action = buffer.toString().trim();
})


// const result = game(playerAction)
// console.log(result)

// let count = 0
// process.stdin.on('data',e=> {
//     const playerAction = e.toString().trim();

//     // console.log(playerAction)
//     const result = game(playerAction)
//     console.log(result)
//     if(result == -1){
//         count ++;
//     }
//     if(count ===3){
//         console.log('你太厉害了，我不是你的对手')
//         process.exit()
//     }
// })