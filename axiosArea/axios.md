# 接口文档

| 接口名           | 请求方式 | 请求参数    | 请求地址                                |
| ---------------- | -------- | ----------- | --------------------------------------- |
| 获取所有学生     | get      | 无参        | http://localhost:3000/getAllStudent     |
| 根据 id 获取学生 | get      | id string   | http://localhost:3000/findStudentById   |
| 根据名字获取学生 | post     | name string | http://localhost:3000/findStudentByName |
| 获取所有学生     | post     | 无参        | http://localhost:3000/postAllStudent    |

# axios

axios 是基于 promise 对 ajax 的一种封装（类似于 jquery 对 ajax 的封装）

# 一、基本使用

1. 默认请求方式发送无参请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios入门</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <script>
      // 默认使用get方式发送请求
      axios({
        url: "http://localhost:3000/getAllStudent",
      }).then((data) => {
        console.log(data);
      });
    </script>
  </body>
</html>
```

2. 指定请求方式为 get，发送无参请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios入门</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <script>
      axios({
        url: "http://localhost:3000/getAllStudent",
        method: "get",
      }).then((data) => {
        console.log(data);
      });
    </script>
  </body>
</html>
```

3. 指定请求方式为 get，发送有参请求(params)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios入门</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <script>
      // 方式一
      axios({
        url: "http://localhost:3000/findStudentById?id=1",
        method: "get",
      }).then((data) => {
        console.log(data);
      });
      // 方式二：
      axios({
        url: "http://localhost:3000/findStudentById",
        method: "get",
        params: { id: 1, name: "zhangsan" },
      }).then((data) => {
        console.log(data);
      });
    </script>
  </body>
</html>
```

4. 指定请求方式为 post，发送无参请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios入门</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <script>
      axios({
        url: "http://localhost:3000/postAllStudent",
        method: "post",
      }).then((data) => {
        console.log(data);
      });
    </script>
  </body>
</html>
```

5. 指定请求方式为 post，发送带有参请求(data)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios入门</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>
  <body>
    <script>
      axios({
        url: "http://localhost:3000/findStudentByName",
        method: "post",
        data: {
          name: "zhangsan",
        },
      }).then((data) => {
        console.log(data);
      });
    </script>
  </body>
</html>
```

axios 使用 post 传参时，默认使用`application/json`。

# 二、axios 请求方式

1. 使用 axios.get，发送无参请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios请求方式</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      axios
        .get("http://localhost:3000/getAllStudent")
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

2. 使用 axios.get，发送有参请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios请求方式</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      axios
        .get("http://localhost:3000/findStudentById", { params: { id: 1 } })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

3. 使用 axios.post，发送无参请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios请求方式</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      axios
        .post("http://localhost:3000/postAllStudent")
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

4. 使用 axios.post，发送有参请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios请求方式</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      axios
        .post("http://localhost:3000/findStudentByName", {
          data: { name: "zhangsan" },
        })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

# 三、axios 并发请求

1. axios.all 发送并发请求

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios并发请求</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      axios
        .all([
          axios.get("http://localhost:3000/getAllStudent"),
          axios.get("http://localhost:3000/findStudentById", {
            params: { id: 1 },
          }),
        ])
        .then((res) => {
          //请求成功返回的是一个数组
          console.log(res[0]);
          console.log("----------");
          console.log(res[1]);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

2. 通过 axios.spread 对响应参数进行分离

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios并发请求</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      axios
        .all([
          axios.get("http://localhost:3000/getAllStudent"),
          axios.get("http://localhost:3000/findStudentById", {
            params: { id: 1 },
          }),
        ])
        .then(
          axios.spread((res1, res2) => {
            console.log(res1);
            console.log("---------");
            console.log(res2);
          })
        )
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

# 四、axios 全局配置

1. 配置全局属性

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios全局配置</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      // 配置全局属性
      axios.defaults.baseURL = "http://localhost:3000/";
      axios.defaults.timeout = 5000;
      axios.defaults.headers.common["Authorization"] = "bear";

      // 在全局配置的基础上发送请求
      axios
        .get("getAllStudent")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      axios
        .post("postAllStudent")
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

# 五、axios 的实例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios的实例</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      // 创建axios实例
      let axiosInstance = axios.create({
        baseURL: "http://localhost:3000/",
        timeout: 5000,
      });

      axiosInstance
        .get("getAllStudent")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      // 创建axios实例2
      let axiosInstance2 = axios.create({
        baseURL: "http://localhost:3000/", // 可以换成其他server的url
        timeout: 5, //       请求将会超时
      });
      axiosInstance2
        .get("getAllStudent")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

# 六、axios 的拦截器

axios 给我们提供了两大类拦截器：

- 一种是请求方向的
  - 成功的
  - 失败的
- 另一种是响应方向的
  - 成功的
  - 失败的

## 拦截器的作用

用于我们在发起网络请求时或者响应结果时进行拦截

1. 发起请求：

- 添加 loading
- 判断用户有没有 token，没有跳转到登录

2. 响应时候：

- 数据处理
- 404,500 统一处理

## 代码示例

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=<device-width>, initial-scale=1.0" />
    <title>axios拦截器</title>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
  </head>

  <body>
    <script>
      // 创建axios实例
      let axiosInstance = axios.create({
        baseURL: "http://localhost:3000/",
        timeout: 5000,
      });
      // 请求方向
      axiosInstance.interceptors.request.use(
        (config) => {
          console.log("进入请求拦截器", config);
          // 一定要放行
          return config;
        },
        (err) => {
          console.log("请求失败", err);
        }
      );
      // 响应方向
      axiosInstance.interceptors.response.use(
        (config) => {
          console.log("进入响应拦截器", config);

          // 直接返回响应数据
          return config.data;
        },
        (err) => {
          console.log("响应失败", err);
        }
      );
      axiosInstance
        .get("getAllStudent")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    </script>
  </body>
</html>
```

# 七、axios 模块封装

```js
import axios from "axios";
let axiosInst = axios.create({
  timeout: 50000,
  // 前缀
  baseURL: "/api",
});
const TOKEN_KEY = "USER_TOKEN";

// 请求拦截
axiosInst.interceptors.request.use(
  (config) => {
    // 请求加token
    const token = window.localStorage.getItem(TOKEN_KEY);
    // 设置url白名单
    if (token) {
      config.headers.common["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
// 响应拦截
axiosInst.interceptors.response.use(
  async (response) => {
    let { data, config } = response;

    if (data.code === 404) {
      alert(404);
    } else if (data.code === 500) {
      alert(500);
    }
    return data;
  },
  (err) => {
    return Promise.reject(err);
  }
);
export default axiosInst;

```

# 八、 axios cancelToken
- [axios CancelToken 取消频繁发送请求的用法和源码解析](https://juejin.cn/post/6844904056721260558)
- [axios如何取消重复请求](https://segmentfault.com/a/1190000021290514)
