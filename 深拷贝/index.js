function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}
function getType(target) {
  return Object.prototype.toString.call(target);
}

function clone(target, map = new WeakMap()) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = clone(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}

const target = {
  field1: 1,
  field2: undefined,
  field3: "ConardLi",
  field4: {
    child: "child",
    child2: {
      child2: "child2",
    },
  },
  field5: [1, 2, 3],
};

target.target = target;

let target2 = clone(target);
console.log(target2);
