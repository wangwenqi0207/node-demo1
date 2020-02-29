//本模块每3秒钟打印一个随机数price
//EventEmitter是node的内置模块 观察者模式 调用、抛事件

const EventEmitter = require('events').EventEmitter;

class Geektime extends EventEmitter{
    constructor(){
        super();
        setInterval(() => {
            this.emit('newlesson',{price:Math.random() *100});
        }, 3000);
    }
}

const geektime =  new Geektime;

module.exports = geektime