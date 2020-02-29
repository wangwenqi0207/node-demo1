// console.log('hello winter')

// //exports用来导出函数、对象、字符串等
// exports.hello = 'world'

//用模块规范改造石头剪刀布游戏
module.exports = function(playerAction){
    console.log(process.argv) //用户输入的内容  node game.js rock 假设用户输入的是rock

    var playerAction = process.argv[process.argv.length - 1]; //取到用户最后输入的值
    console.log(playerAction)

    var random =Math.random()*3; //设置一个随机数

    //根据随机数的三种情况分配不同的值
    if(random <1){
        var computerAction = 'rock'
    }else if(random >2){
        var computerAction = 'scissor'
    }else{
        var computerAction = 'paper'
    }

    if(computerAction==playerAction){
        console.log('平局')
        return 0;
    }else if(
        (computerAction ==='rock' && playerAction==='paper') || (computerAction ==='scissor' && playerAction==='rock')
        || (computerAction ==='paper' && playerAction==='scissor')
        ){
        console.log('你赢了')
        return -1   
    }else{
        console.log('你输了') 
        return 1
    }
}

