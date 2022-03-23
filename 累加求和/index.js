function addg(num) {
  if (!num) {
    return addg.counter;
  }
  if (!addg.counter) {
    addg.counter = num;
  } else {
    addg.counter += num;
  }
  return addg
}

// 注释后的内容为需要返回的值
// console.log(
//   addg(), // undefined;
//   addg(2)(), // 2
//   addg(2)(3)(), // 5
//   addg(2)(3)(4)(), // 9
//   addg(2)(3)(4)(5)() // 14
// );
let ret =  addg(2)(3)(4)(5)()
console.log(ret);
