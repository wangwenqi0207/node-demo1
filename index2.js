//调用geektime函数模块

const geektime = require('./geektime')

geektime.addListener('newlesson',(res)=>{
    if(res.price <80){
        console.log('buy',res)
    }
    console.log('yeah!',res)
})