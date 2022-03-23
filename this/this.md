# this指向

在前端的面试中，this指向与面向对象是必考题，也是日常开发中绕不开的话题。

## `this`在不同调用环境下的指向
1. [事件调用环境](.//event.html)： 谁触发事件，函数里面的this指向就是谁
2. 全局环境
    - 浏览器环境 `window`
    - [node 环境](.//global-node.js) `module.exports`
3. [函数内部](.//function.html)
    - this最终指向的是调用它的对象，和声明没有关系
    - 函数被多层对象所包含，如果函数被最外层对象调用，this指向的也只是它上一级的对象
4. [构造函数](.//constructor.html)
    - 构造函数中的this指向的是实例对象
    - [如果构造函数中有return](.//constructor-2.html)
        - 如果return的值是对象，this指向返回的对象
        - 如果不是对象，则this指向保持原来的规则，在这里null比较特殊
5. [箭头函数](.//arrow-function.html)
    - 箭头函数本身是没有this和arguments的，在箭头函数中引用的this实际上调用的是上一层作用域中的this，这里强调一下是上一层作用域，因为对象是不能形成独立的作用域的
6. [修改this指向](.//bind-this.html)
    - 箭头函数不能修改this指向
    - 普通函数可以修改this指向

## [面试题](../questions/this.md)
