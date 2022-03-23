1. 假设页面中有一个class为`box`的div，程序的输出结果是?
```javascript
let box = document.querySelector('.box');

box.onclick = move;
function move() {
    console.log(this)
}
console.log(this)
```

2. 程序的输出结果是?
```javascript
var foo = {b: 10};
var obj = {
    a: 'a',
    fn: () => {
        console.log(this)
    }
}
obj.fn.call(foo)
```
3. 下面程序的执行结果是？
```javascript
function fn() {
  this.num = 10;
}

fn.num = 20;
fn.prototype.num = 30;

fn.prototype.method = function () {
  console.log(this.num);
};

var prototype = fn.prototype;
var method = prototype.method;

new fn().method();
prototype.method();
method();
```
