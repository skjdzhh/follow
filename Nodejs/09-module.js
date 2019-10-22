/*
    module.exports 真正的暴露对象，exports只是对它的引用
    module.exports.属性 = 值
    module.exports.方法 = 函数
    module.exports = 对象或者函数

    module.id             //模块id、模块名称
    module.parent         //模块的父级
    module.filename       //模块的文件名和路径
    module.children       //子模块列表
    module.paths          //模块查找路径，如果当前目录下找不到node_modules，就去上一级目录查找，直到更目录
                            如果配置了NODE_PATH环境变量，则会去环境变量指向的路径查找   
*/
// console.log(arguments.callee.toString());
console.log(arguments);     //第三个参数为module