//异步编程 callback
// try{
    interview(function(res){
        if(res){
            return console.log('cry')
        }
        console.log('smile')
    })
//}catch(e){
//     console.log('cry',e)
// }

//第一轮调用这个函数时 抛出错误打印cry，第二轮抛出错误打印cry2，正确打印smile
//每轮回调就陷入了回调地狱
interview(function(res){
    if(err){
        return console.log('cry')
    }
    interview(function(err){
        if(err){
            return console.log('cry2')
        }
    })
    console.log('smile')
})


//函数interview 在1秒后抛出一个随机数 若随机数小于0.8报smile 大于0.8报cry'
function interview(callback){
    setTimeout(()=>{
        if(Math.random()<0.8){
            callback(null,'success');
        }else{
            callback(new Error('fail'));
        }    
    },1000)
}