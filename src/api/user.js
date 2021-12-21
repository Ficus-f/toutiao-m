/**
 * 用户相关请求模块
 */
import request from '@/utils/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/login',
    data
  })
}

export const sendSms = mobile => {
  return request({
    method: 'GET',
    url: `api/sendSms/${mobile}`
  })
}

/**
 * 获取用户自己的信息
 */
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/user'
  })
}
