//链表初始化的时候是一个空链
var lianbiao = function() {
    //链表头
    var head = null;

    //链表长度
    length = 0;

    //节点（辅助类）
    var Node = function(element) {
        this.element = element;
        this.next = null;
    }

    //链表尾添加节点
    this.append = function(element) {
        var node = new Node(element);
        if (head == null) {
            head = node;
        } else {
            var current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }

    //返回链表头
    this.getHead = function() {
        return head;
    }

    //链表的某一位置添加节点
    this.insert = function(element, position) {
        var node = new Node(element);
        var current = head;
        var previous;
        var index = 0;
        if (position > -1 && position < length) {
            if (position == 0) {
                head = node;
                head.next = current;
                length++;
            } else {
                while (index < position) {
                    //当while的时候 0<n  此时循环体执行n次

                    previous = current;
                    current = current.next;
                    index++;
                }

                previous.next = node;
                node.next = current;
                length++;
            }
        }

    }

    //数据结构中没有移除这个概念，只用拿出来用的概念

    //移除某一个位置的链表节点
    this.removeAt = function(position) {
        var index = 0;
        var current = head;
        var previous = null;
        if (position > -1 && position < length) {
            if (position == 0) {
                head = current.next;
                return current;
                length--;
            } else {
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;

                }
                previous.next = current.next;
                return current;
                length--;
            }

        }

    }

    this.indexof = function(element) {
        var current = head;
        while (current) {
            if (current.element == element) {

            }
        }
        var index = 0;

    }


}
var lb = new lianbiao();
lb.append(1);
lb.append(2);
lb.append(3);
lb.append(4);
lb.append(5);
lb.append(6);
lb.append(7);
lb.append(8);