import axios from "axios"


// 创建axios实例
const service = axios.create({
    // baseURL: process.env.VUE_APP_BASE_API,
    // baseURL: 'http://wthrcdn.etouch.cn',
    baseURL: 'http://prhr.purui.cn',
    timeout: 10000,
})

// // request interceptor
// service.interceptors.request.use(

// )

export default service