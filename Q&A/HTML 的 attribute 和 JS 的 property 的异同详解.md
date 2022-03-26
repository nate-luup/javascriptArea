# HTML 的 attribute 和 JS 的 property 的异同详解

同样是获得 `element` 的 `style` 属性,有两种方式 `el.style` 和 `el.getAttribute(‘style’)` 。

- 前者我们叫 `style` 是 `el` 的 `property`
- 后者我们叫`style` 是 `el` 的 `attribute`

## attribute

**attribute 是 HTML DOM 对象自带（特有）的属性，在 html 中显式的设置，例如 id，class ，value 等**。它的值只能是字符串。

```html
<input type="text" id="hjh" name="haha" />

<script>
  var hjh = document.getElementById('hjh')
  console.log(hjh.attributes)
</script>
```

attribute 有三个方法：`setAttribute()` , `getAttribute()` , `removeAttribute()`

```js
var hjh = document.getElementById('hjh')
hjh.setAttribute('value', 'test')

console.log(a.getAttribute('name')) // haha

a.removeAttribute('name')
console.log(a.getAttribute('name')) // null
```

Attribute 的属性值只能是字符串，属性键大小写不敏感。

可以说，如果想要获取一个 DOM 元素的 attribute 属性值，只要打开控制台看看该 DOM 标签的 html 代码，任何时候 attribute 值和 html 标签内设置的属性值都是同步的。

## property

DOM 是 JavaScript 里的对象，Property 是 DOM 中的属性，它的属性值主要通过点运算符来获取和改变。这个对象实现了很多属性（property）：‘value’，'className’等，以及一些方法 getAttribute，setAttribute 等，它也可以和其他的 JavaScript 对象一样添加自定义的属性以及方法。property 的值可以是任何的数据类型，对大小写敏感，自定义的 property 不会出现在 html 代码中，只存在 js 中。

```js
	<input type='text' id='hjh' a='haha' />

   <script>
        var hjh = document.getElementById('hjh');
	    console.log(hjh.type);
	    console.log(hjh.id);

	    console.log(hjh.a);
	    console.log(hjh.title);
    </script>

```

我们在 input 标签中自定义了 a 属性，可是在 property 中访问为 undefined。没有定义 title 属性，却返回了一个空值。

这是因为 html 标签都有 5 个标准特性：id，title，lang，dir，className（在 DOM 中以 property 方式操作这几个特性会同步到 html 标签中）。所以即使在 html 中没有指定 id、title 等，也会默认赋予一个空串，通过 property 属性（点操作符）可以访问。而除此之外在 html 中设置的其他属性是不能通过 Property 访问到的（除了 attribute 特有的属性）。

如果把 DOM 元素看成是一个普通的 Object 对象，那么 property 就是一个以名值对(name=‘value’)的形式存放在 Object 中的属性。要添加和删除 property 也和普通的对象没啥分别：

```js
var hjh = document.getElementById('hjh')
a.age = 10
console.log(a.age) // 10
delete a.age
console.log(a.age) // undefined
```

## 注意

很多 attribute 节点还有一个相对应的 property 属性，比如 div 元素的 id 和 class 既是 attribute，也有对应的 property（id 和 className），不管使用哪种方法都可以访问和修改，如果在 TAG 对这些属性进行赋值，那么这些值就会作为初始值赋给 DOM 的同名 property。但也有一些比较特殊的：

- input 元素的 value

```js
var a = document.getElementById('txt')
a.setAttribute('value', 'test')
console.log(a.value) // test

a.value = 'change'
console.log(a.getAttribute('value')) // test

// 	用点操作符修改 value 值，并不会同步到 attribute 上；但是通过 setAttribute 修改属性值，会同步到 property 上。
```

- 表单

```html
<input type="radio" checked="checked" id="radio" />
<script>
  var radio = document.getElementById('radio')
  console.log(radio.getAttribute('checked')) // 'check'
  console.log(radio.checked) // true
</script>

<!-- 
    一些表单元素，对于这些特殊的 attribute 节点，只要存在该节点，对应的 property就为true，disabled 类似 
-->
```

- href

```html
<a href="a.html" id="web"> </a>
<script>
  var radio = document.getElementById('web')
  console.log(web.getAttribute('href')) // 'a.html'
  console.log(web.href) // 绝度路径
</script>

<!-- attribute 取得是相对路径；property 取得是绝对路径。 -->
```

## 总结

attribute 属性在 html 上设置，会反应在 html 上，两者同步。property 属性可以看作 DOM 对象的键值对，用点操作符修改。通常情况下，都使用 property 的点操作符对 DOM 进行操作。

以下两种情况用 attribute：

- 自定义 attribute 标签，因为它不能同步到 property 上。
- 访问内置的 html 标签的 attribute，如 input 的 value（可以用来检验 value 值是否改变）

## 参考地址

- [HTML 的 attribute 和 JS 的 property 的异同详解](https://blog.csdn.net/weixin_42186513/article/details/83414453)
