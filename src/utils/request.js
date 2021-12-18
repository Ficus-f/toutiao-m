/**
 * 请求模块
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'http:localhost:8080/' // 接口的基础路径
})

// 请求拦截器

// 响应拦截器

export default request
