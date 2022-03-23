class vue {
  constructor(option) {
    this.option = option;
    this._data = this.option.data;
    this.el = document.querySelector(this.option.el);
    this.compileNode(this.el);
    this.observe(this._data)
  }
  observe(data) {
    this._data = new Proxy(data, {
      set(target, prop, newValue) {
          console.log(newValue);
          return Reflect.set(...arguments)
      },
    });
  }
  compileNode(el) {
    let child = el.childNodes;
    [...child].forEach((node) => {
      if (node.nodeType === 3) {
        // console.log("这是一个文本节点");
        let text = node.textContent;
        let reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
        if (reg.test(text)) {
          let $1 = RegExp.$1;
          this._data[$1] &&
            (node.textContent = text.replace(reg, this._data[$1]));
        }
      } else if (node.nodeType === 1) {
        let attr = node.attributes;
        if (attr.hasOwnProperty("v-model")) {
          let keyName = attr["v-model"].nodeValue;
          node.value = this._data[keyName];
          node.addEventListener("input", (e) => {
            this._data[keyName] = node.value;
          });
          //   console.log(keyName);
        }
        console.log("这是一个元素节点");
        this.compileNode(node);
      }
    });
  }
}
