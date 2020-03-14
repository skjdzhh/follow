var s = new Set();
s.add(1);
s.add(2);
s.add(3);
//数组的话  value,index
s.forEach(function(value1, value2, set) {
    console.log(value1);
    console.log(typeof(value1));
    console.log(value2);
})
var obj = {
    1: 1
}

//默认为string类型
for (var i in obj) {
    console.log(typeof(i));
}