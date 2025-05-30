import { request } from '../../axiosConfig'
import type { ISingleArticle } from '../../types'

export function getSingleArticle({ slug }: { slug: string }) {
  return request.get<ISingleArticle>(`/articles/${slug}`)
}
