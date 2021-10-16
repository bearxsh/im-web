import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.bearxsh.com/'
});

instance.interceptors.response.use(response => {
    if (response.data.code === 201) {
        console.log("登录成功！");
        window.location.href = 'chat';
    }
    return response;
}, error => {
    console.log("错误");
    console.log(error);
    if (error.response.status === 401) {
        console.log("还未登录，需要重定向到登录页面！");
        window.location.href = 'login';
    }
});

export default instance;
