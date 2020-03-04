function fn0(n) {
    if (n < 101) {
        if (n <= 4) {
            return 1;
        } else {
            return fn0(n - 1) + fn0(n - 4);
        }
    } else {
        console.log("输入数据不符合规则");
    }
}
console.log(fn0(5));