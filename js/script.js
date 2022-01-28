// 1. Дана строка **'ddd@bbb@ccc'**. Замените все**@** на **'!'**

let str = "ddd@bbb@ccc";
let updateStr = str.replaceAll('@', '!');
console.log(updateStr);