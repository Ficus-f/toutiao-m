/**
 * 请求模块
 */
import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: '/api' // 接口的基础路径
})
// http://127.0.0.1:5000/
// 请求拦截器
request.interceptors.request.use(function (config) {
  // 请求发起会经过这里
  // config: 本次请求的请求配置对象
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `Bearer ${store.state.user.token}`
  }
  return config
}, function (error) {
  // 如果请求出错了(还没有发出去)会进入这里
  return Promise.reject(error)
})
// 响应拦截器

export default request
