import { request } from '../../axiosConfig'
import type { IGetAllArticlesResponse } from '../../types'

export function getAllArticles() {
  return request.get<IGetAllArticlesResponse>('/articles')
}
