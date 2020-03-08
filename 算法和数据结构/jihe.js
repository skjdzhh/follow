var Set2 = function() {
    var items = {};

    //has检查元素是否存在  return boolean
    this.has = function(value) {
        return items.hasOwnProperty(value);
    }

    //集合中的元素是不重复的
    this.add = function(value) {
        if (this.has(value)) {
            return false;
        } else {
            items[value] = value;
            return true;
        }
    }

    //从集合中移除元素
    this.remove = function(value) {
        if (this.has(value)) {
            delete items[value];
            return items[value];
        }
        return false;
    }

    //查看集合
    this.getItems = function() {
        return items;
    }

    //清空集合
    this.clear = function() {
        items = {};
    }

    //返回集合大小
    this.size = function() {
        //遍历集合
        var count = 0;
        for (var i in items) {
            // console.log(i);
            //而此时i肯定是一个变量
            //对象的键值对中，键是不可以改变的，是常量
            // console.log(items[i]);

            //使用直接++的时候有可能返回其原型对象下的属性
            // count++;  
            //所以得使用如下
            if (this.has(i)) {
                count++;
            }

        }
        return count;
    }

    //并集
    this.union = function() {

    }
}

var s1 = new Set2();
s1.add(1);
s1.add(2);
s1.add(3);
s1.add(4);
console.log(s1.getItems());
console.log(s1.size());
s1.remove(4);
s1.remove(3);
console.log(s1.getItems());
console.log(s1.size());