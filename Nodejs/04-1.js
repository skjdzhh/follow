global.name = "Tom";
var str = "今天星期五，明天星期六，好嗨哦~~";
//exports是暴露对象，可以将模块内部的数据暴露到引用处
exports.str = str; //暴露对象可以加属性和方法，于是把内部变量值复制给属性
exports.show = function() {
    console.log("hello Nodejs")
}