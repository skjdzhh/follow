var buf = new Buffer([97]);     //当其为两个字节的时候，不够放所以直接置空，不放内容
// buf.write([66]);              //汉字和字母均占用一个字节
console.log(buf);            
console.log(buf.toString());     //toString()将字符编码转化Wie字符
//所以在utf-8编码中一个汉字占用3个字节

// var buf =new Buffer([十进制编码]) 








