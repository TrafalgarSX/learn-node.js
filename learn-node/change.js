const buf =Buffer.from('runoob','ascii');

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1=Buffer.alloc(10);
// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2=Buffer.alloc(10,1);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3=Buffer.allocUnsafe(10);

console.log(buf1.toString('hex'));
console.log(buf2.toString('hex'));
console.log(buf3.toString('hex'));

