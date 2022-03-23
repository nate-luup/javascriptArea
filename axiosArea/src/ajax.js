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
