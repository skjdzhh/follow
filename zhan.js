//js中函数有两个功能  1.函数  2.构造器

//使用类封装栈操作
function Stack() {
    var items = []; //函数的私有变量
    this.items = []; //公有的变量，因为每一个new Stack都可以访问

    //添加栈顶元素
    this.push = function(element) {
            items.push(element);
        }
        //返回栈
    this.getItems = function() {
        return items;
    }

    //拿出栈顶元素
    this.pop = function() {
        return items.pop();
    }

    //查看栈顶元素
    this.peek = function() {
        var num = items.length - 1;
        return items[num];
    }

    //检查是否为空
    this.isEmpty = function() {

        //返回是空时候的状态
        return items.length == 0;

    }

    //清除栈
    this.clear = function() {
        items = [];
    }

    //获取栈的大小
    this.size = function() {
        return items.length;
    }

}


//十进制转二进制的方法
//查看循环处的符号
var divBy2 = function(num) {
    var stack = new Stack();
    var str = "";
    var yushu;
    while (num > 0) {
        yushu = num % 2;
        stack.push(yushu);
        num = Math.floor(num / 2);
    }
    while (!stack.isEmpty()) {
        str += stack.pop();

    }
    return str;
}