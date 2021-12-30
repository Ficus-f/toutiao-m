/**
 * 文章请求模块
 */
import request from '@/utils/request'

export const getArticle = (params) => {
  return request({
    method: 'GET',
    url: 'articles',
    params
  })
}
