# compose

1. 实现`compose`函数，程序输出结果如下
```
f1 1
f2 2
f3 3
```

```javascript
function compose(){
    // TODO 实现逻辑
}
function f1(arg) {
  console.log("f1", arg);
  return 2;
}
function f2(arg) {
  console.log("f2", arg);
  return 3;
}
function f3(arg) {
  console.log("f3", arg);
  return 4;
}

console.log(compose(f1, f2, f3)(1));
```

2. 实现compose函数，输出结果如下
```
fn1
fn2
fn3
end fn2
end fn1
```
```javascript
function compose(middlewares) {
  // TODO 实现逻辑
}

async function fn1(next) {
  console.log("fn1");
  await next();
  console.log("end fn1");
}
async function fn2(next) {
  console.log("fn2");
  await delay();
  await next();
  console.log("end fn2");
}
function fn3(next) {
  console.log("fn3");
}

function delay() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
}
const middlewares = [fn1, fn2, fn3];
const finalFn = compose(middlewares);
finalFn();
```
