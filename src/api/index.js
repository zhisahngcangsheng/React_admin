import axios from 'axios'

axios.defaults.timeout = 10000;

//跨域请求，允许保存cookie
axios.defaults.withCredentials = true;

//HTTPrequest拦截
axios.interceptors.request.use(config => {

    return config
}, error => {
    return Promise.reject(error)
});
//HTTPresponse拦截
axios.interceptors.response.use(res => {

    return res;
}, error => {

    return Promise.reject(new Error(error));
})

export default axios;
