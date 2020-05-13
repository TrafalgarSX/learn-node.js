var express=require('express');
var app=express();

app.get('/',function(req,res){
    console.log("主页GET请求");
    res.send('Hello GET');
})

app.post('/',function(req,res){
    console.log('主页POST请求');
    res.send('Hello POST');
})

app.get('/del_user',function(req,res){
    console.log("/del_user response to DELETE request");
    res.send('删除页面');
})

app.get('/list_user',function(req,res){
    console.log('/list_user GET');
    res.send('用户请求页面');
})
// 对页面 abcd, abxcd, ab123cd, 等响应 GET 请求
app.get('/ab*cd', function(req, res) {   
    console.log("/ab*cd GET 请求");
    res.send('正则匹配');
})
var server=app.listen(8080,function(){
    var host=server.address().address;
    var port =server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})