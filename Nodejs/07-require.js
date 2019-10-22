// var obj = require('./07-1');    //当模块没有返回值的时候，接收到空对象

/*
注意：
    a.子模块没有暴露对象时候，返回空对象
    b.自定义模块必须加上./ ，因为在nodejs中默认不是当前目录，默认是node_modules目录 
*/

// console.log(obj);

// var obj1 = require('jquery');
// console.log(obj1.toString());

var fs = require('fs');
// console.log(fs);
fs.readFile('./06.js',function(err,data){
    console.log(data.toString());
});
