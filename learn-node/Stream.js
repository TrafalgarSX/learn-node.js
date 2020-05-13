//Stream是一个抽象接口，Node中很多对象实现了这个接口
//Readable  Writable Duplex可读可写操作 Transform  操作被写入数据，然后读出结果
var fs=require('fs');
var data="";

var readerStream =fs.createReadStream('input.txt');

readerStream.setEncoding('UTF-8');

readerStream.on('data',function(chunk){
    data+=chunk;
});

readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error',function(err){
    console.log(err.stack);
});

console.log('程序执行完毕');
//fs.close();

var datawrite='写入测试！';

var writerStream =fs.createWriteStream('output.txt');
writerStream.write(datawrite,'UTF-8');

writerStream.end();

writerStream.on('finish',function(){
    console.log('写入完成');
});

writerStream.on('error',function(err){
    console.log(err.stack);
});

console.log("写入完毕！");