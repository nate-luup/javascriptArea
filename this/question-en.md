1. What is the output of the following program?

```javascript
let box = document.querySelector(".box");

box.onclick = move;
function move() {
  console.log(this); // 
}
console.log(this); // undefined
```

2. What is the output of the following program?

```javascript
var foo = { b: 10 };
var obj = {
  a: "a",
  fn: () => {
    console.log(this); // a 
  },
};
obj.fn.call(foo);
```

3. In what order should the logs appear?

```js
console.log("script start"); 2

setTimeout(function () {
  console.log("setTimeout"); 1
}, 0);

Promise.resolve()
  .then(function () {
    console.log("promise1"); 4
  })
  .then(function () {
    console.log("promise2"); 5
  });

console.log("script end"); 3


```

4. Valid Parentheses

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.

Example 1:

```js
Input: s = "()";
Output: true;
```

Example 2:

```js
Input: s = "()[]{}";
Output: true;
```

Example 3:

```js
Input: s = "(]";
Output: false;
```

Example 4:

```js
Input: s = "([)]";
Output: false;
```

Example 5:

```js
Input: s = "{[]}";
Output: true;
```

Constraints:

- `1 <= s.length <= 104`
- `s` consists of parentheses only `'()[]{}'`.


```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

};
```

5. What is a react fiber?
