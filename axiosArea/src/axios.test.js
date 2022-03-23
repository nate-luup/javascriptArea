import axios from "axios";

let allStudent = [
  { id: 1, name: "zhangsan", age: 10 },
  { id: 2, name: "lisi", age: 20 },
];
let studentZs = { id: 1, name: "zhangsan", age: 10 };

describe("一、axios 基本使用", () => {
  test("1. 默认请求方式发送无参请求", async () => {
    // 默认使用get方式发送请求
    let { data } = await axios({
      url: "http://localhost:3000/getAllStudent",
    });
    expect(data).toEqual(allStudent);
  });

  test("2. 指定请求方式为 get，发送无参请求", async () => {
    let { data } = await axios({
      url: "http://localhost:3000/getAllStudent",
      method: "get",
    });
    expect(data).toEqual(allStudent);
  });

  test("3. 指定请求方式为 get，发送有参请求(params)", async () => {
    // 方式一
    /*  let { data } = await axios({
          url: "http://localhost:3000/findStudentById?id=1",
          method: "get",
        }); */
    // 方式二：
    let { data } = await axios({
      url: "http://localhost:3000/findStudentById",
      method: "get",
      params: { id: 1, name: "zhangsan" },
    });
    expect(data).toEqual(studentZs);
  });

  test("4. 指定请求方式为 post，发送无参请求", async () => {
    let { data } = await axios({
      url: "http://localhost:3000/postAllStudent",
      method: "post",
    });
    expect(data).toEqual(allStudent);
  });

  test("5. 指定请求方式为 post，发送带有参请求(data)", async () => {
    let { data } = await axios({
      url: "http://localhost:3000/findStudentByName",
      method: "post",
      data: {
        name: "zhangsan",
      },
    });
    expect(data).toEqual(studentZs);
  });
});

describe("二、axios 请求方式", () => {
  test("1. 使用 axios.get，发送无参请求", async () => {
    const { data } = await axios.get("http://localhost:3000/getAllStudent");
    expect(data).toEqual(allStudent);
  });
  test("2. 使用 axios.get，发送有参请求", async () => {
    const { data } = await axios.get("http://localhost:3000/findStudentById", {
      params: { id: 1 },
    });
    expect(data).toEqual(studentZs);
  });
  test("3. 使用 axios.post，发送无参请求", async () => {
    const { data } = await axios.post("http://localhost:3000/postAllStudent");
    expect(data).toEqual(allStudent);
  });
  test("4. 使用 axios.post，发送有参请求", async () => {
    const { data } = await axios.post(
      "http://localhost:3000/findStudentByName",
      {
        data: { name: "zhangsan" },
      }
    );
    expect(data).toEqual(studentZs);
  });
});
describe("三、axios 并发请求", () => {
  test("1. axios.all 发送并发请求", async () => {
    const [res1, res2] = await axios.all([
      axios.get("http://localhost:3000/getAllStudent"),
      axios.get("http://localhost:3000/findStudentById", {
        params: { id: 1 },
      }),
    ]);
    const { data: data1 } = res1;
    const { data: data2 } = res2;
    expect(data1).toEqual(allStudent);
    expect(data2).toEqual(studentZs);
  });
});

describe("四、axios 全局配置", () => {
  test("1. 配置全局属性", async () => {
    // 配置全局属性
    axios.defaults.baseURL = "http://localhost:3000/";
    axios.defaults.timeout = 5000;
    axios.defaults.headers.common["Authorization"] = "bear";

    // 在全局配置的基础上发送请求

    let { data: data1 } = await axios.get("getAllStudent");
    expect(data1).toEqual(allStudent);

    let { data: data2 } = await axios.post("postAllStudent");
    expect(data2).toEqual(allStudent);
  });
});

describe("五、 axios 的实例", () => {
  test("1. axios的实例", async () => {
    // 创建axios实例
    let axiosInstance = axios.create({
      baseURL: "http://localhost:3000/",
      timeout: 5000,
    });

    let { data: data1 } = await axiosInstance.get("getAllStudent");
    expect(data1).toEqual(allStudent);

    // 创建axios实例2
    let axiosInstance2 = axios.create({
      baseURL: "http://localhost:3000/", // 可以换成其他server的url
      timeout: 1, //       请求将会超时
    });

    // await axiosInstance2.get("getAllStudent")
  });
});
