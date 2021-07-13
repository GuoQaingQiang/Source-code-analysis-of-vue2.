import axios from "axios";

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const  get = (url, params) => {
    params = params || {};
    return new Promise((resolve, reject) => {
        // axiso 自带 get 和 post 方法
        axios.get(url, {
            params,
        }).then(res => {
            console.log(res);
            resolve(res);
        }).catch(error => {
            console.warn(error.message);
        })
    })
}