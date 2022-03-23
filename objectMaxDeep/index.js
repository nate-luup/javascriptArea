function maxDeep(obj) {
  if (typeof obj === "object") {
    let pre;
    for (let key of Object.keys(obj)) {
      if (!pre) {
        pre = maxDeep(obj[key]) + 1;
      } else {
        pre = Math.max(pre, maxDeep(obj[key]) + 1);
      }
      return pre;
    }
  } else {
    return 1;
  }
}

console.log(
  maxDeep({ a: { b: { c: { d: [1, 2, 3] } } } }, { foo: { bar: { hah: 1 } } })
);

function maxDeep(obj) {
  if (typeof obj === "object") {
    let pre;
    for (let key of Object.keys(obj)) {
      if (!pre) {
        pre = maxDeep(obj[key]) + 1;
      } else {
        pre = Math.max(pre, maxDeep(obj[key]) + 1);
      }
    }
  } else {
    return 1;
  }
}
