
console.log(arguments.callee);    //函数

//所有用户编写的代码都自动放在一个函数中，函数有5个参数中
/*
    exports  暴露对象  可以将模块中的数据暴露给引用处
    require  引入模块的函数  用来在一个模块中引入另一个模块，并且将子模块暴露的数据暴露给比变量
    module   包含了当前模块的所有信息
    __filename   当前模块的文件名
    __dirname    当前模块的目录名（目录路径）
     
*/

exports.username="张三"
console.log(arguments.callee.toString());   //显示函数体
console.log(arguments);                     //显示所有参数