// //引入events模块
// var events=require('events');
// //创建eventEmitter对象
// var eventEmitter=new events.EventEmitter();
// //创建事件处理程序
// var connectHandler=function connected(){
//     console.log("连接成功");
//     //触发data_received事件  这个应该是回调    先登记触发  绑定事件后再成功触发
//     eventEmitter.emit('data_received');
// }
// //绑定connection事件处理程序
// eventEmitter.on('connection',connectHandler);

// //可使用匿名函数绑定data_received事件
// eventEmitter.on('data_received',function(){
// console.log('数据接收成功');
// });

// //触发connection事件
// eventEmitter.emit('connection');

// console.log("程序执行完毕。");

var EventEmitter=require('events').EventEmitter;
var event=new EventEmitter();
event.on('some_event',function(){
    console.log('some_event事件触发');
});
//1秒后再触发事件
setTimeout(function(){
    event.emit('some_event');
},1000);