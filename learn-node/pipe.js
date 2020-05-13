var fs=require('fs');
var zlib=require('zlib');

var readerStream =fs.createReadStream('input.txt');
var writerStream =fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);
console.log('程序执行完毕!');

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));
