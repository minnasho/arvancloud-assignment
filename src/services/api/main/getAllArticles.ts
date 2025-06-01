import { request } from '../../axiosConfig'
import type { IGetAllArticlesResponse } from '../../types'

interface GetAllArticlesParams {
  limit?: number
  offset?: number
}
export function getAllArticles({ limit, offset }: GetAllArticlesParams) {

    return request.get<IGetAllArticlesResponse>(
      `/articles?page=${JSON.stringify(offset)}&limit=${JSON.stringify(limit)}`,
    )

}
