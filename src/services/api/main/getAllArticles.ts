import { request } from '../../axiosConfig'
import type { IGetAllArticlesResponse } from '../../types'

interface GetAllArticlesParams {
  limit?: number
  offset?: number
}
export function getAllArticles({ limit, offset }: GetAllArticlesParams) {
  if (limit && offset) {
    const params = new URLSearchParams()
    params.append('offset', offset.toString())
    params.append('limit', limit.toString())

    return request.get<IGetAllArticlesResponse>(
      `/articles?${params.toString()}`,
    )
  }
  return request.get<IGetAllArticlesResponse>('/articles')
}
