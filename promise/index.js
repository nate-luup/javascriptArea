let fs = require("fs");

fs.readFile("./name.txt", "utf8", function (err, data) {
  fs.readFile(data, "utf8", function (err, data) {
    fs.readFile(data, "utf8", function (err, data) {
      console.log(data);
    });
  });
});

let fs = require("fs");

function read(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}

read("./name.txt")
  .then((data) => {
    return read(data);
  })
  .then((data) => {
    return read(data);
  })
  .then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log(err);
    }
  );

const p1 = new Promise((resolve, reject) => {
  console.log("create a promise");
  resolve("成功了");
});

console.log("after new promise");

const p2 = p1.then((data) => {
  console.log(data);
  throw new Error("失败了");
});

const p3 = p2.then(
  (data) => {
    console.log("success", data);
  },
  (err) => {
    console.log("faild", err);
  }
);
