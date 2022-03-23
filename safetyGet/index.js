const safeGet = (obj, path) => {
  try {
    return path.split(".").reduce((o, k) => o[k], obj);
  } catch (e) {
    return undefined;
  }
};

var data = { a: { b: { c: "ScriptOJ" } } };
console.log(safeGet(data, "a.b.c")); // = scriptoj
console.log(safeGet(data, "a.b.c.d")); // = 返回 undefined
console.log(safeGet(data, "a.b.c.d.e.f.g")); // = 返回 undefined
