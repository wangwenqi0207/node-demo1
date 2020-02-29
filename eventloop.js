//异步编程 eventloop

const eventloop = {
    //设置一个空队列
    queue:[],
    //写一个函数 如果数组有队列，就添加进去，如果没有就执行当前函数
    loop(){
        while(this.queue.length){
            var callback = this.queue.shift();
            callback();
        }

        //50毫秒后进行下一次循环
        setTimeout(this.loop.bind(this),50)
    },

    add(callback){
        this.queue.push(callback)
    }
}

eventloop.loop();

setTimeout(()=>{
    eventloop.add(function(){
        console.log(1)
    })
},500)

setTimeout(()=>{
    eventloop.add(function(){
        console.log(2)
    })
},800)