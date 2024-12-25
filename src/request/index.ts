import axios from 'axios';

const request = axios.create({
  timeout: 5000,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未认证
          break;
        case 403:
          // 未授权
          break;
        case 404:
          // 资源未找到
          break;
        case 408:
          // 超时
          break;
        case 500:
          // 服务器错误
          break;
        default:
          // 未知错误
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default request;
