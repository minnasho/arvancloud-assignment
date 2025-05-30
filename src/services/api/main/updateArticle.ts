import { request } from '../../axiosConfig'
import type { INewArticleData, IUpdateArticlePayload } from '../../types'

export interface IUpdateArticle {
  slug: string
  data: Partial<INewArticleData>
}
export function updateArticle({ slug, data }: IUpdateArticle) {
  return request.put<unknown, IUpdateArticlePayload>(`/articles/${slug}`, {
    article: { ...data },
  })
}
