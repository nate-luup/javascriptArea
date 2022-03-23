// compose 实现一
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce((a, b) => (...args) => b(a(...args)));
}
// compose 实现二
// const compose = (...[first, ...other]) => (...args) => {
//   let ret = first(...args);
//   other.forEach((fn) => {
//     ret = fn(ret);
//   });
//   return ret;
// };

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
