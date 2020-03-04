function Queue() {
    var items = [];

    //队列尾添加元素
    this.enqueue = function(item) {
        items.push(item);
    }

    //队列头删除元素
    this.dequeue = function(item) {
        return items.shift();
    }

    //查看队列头
    this.front = function() {
        return items[0];
    }

    //检查队列是否为空
    this.isEmpty = function() {
        return (items.length = 0);
    }

    //检查队列长度
    this.size = function() {
        return items.length;
    }
}

//玩家列表
var names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

//规则
var num = 3;

function chuanhua(names, num) {
    var q = new Queue();
    for (var i = 0; i < names.length; i++) {
        q.enqueue(names[i]);
    }

    //重要部分
    while (q.size() > 1) {
        for (var i = 0; i < num - 1; i++) {
            q.enqueue(q.dequeue());
        }
        var taotai = q.dequeue();
        console.log(taotai + "出局");
    }
    return q.dequeue();
}

//队列
//优先队列

//优先级  priority 
// priorityQueue

priorityObj = {
    name: "xxx",
    priority: 20
}

//优先级队列主要考虑入列的问题
//优先队列和福州类

var priorityQueue = function() {
    var items = [];

    //辅助类
    var priorityItem = function(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    //入列
    this.enqueue = function(element, priority) {
        var queueItem = new priorityItem(element, priority);

        var added = false;
        for (var i = 0; i < items.length; i++) {
            if (queueItem.priority > items[i].priority) {
                items.splice(i, 0, queueItem);
                added = true;
                break;
            }
        }

        if (!added) {
            items.push(queueItem);
        }
    }


    //查看队列
    this.getItems = function() {
        return items;
    }

}