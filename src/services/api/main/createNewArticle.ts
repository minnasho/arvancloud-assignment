import { request } from '../../axiosConfig'
import type {
  INewArticleResponse,
  INewArticlePayload,
  INewArticleData,
} from '../../types'

export function createNewArticle({
  title,
  description,
  body,
  tagList,
}: INewArticleData) {
  return request.post<INewArticleResponse, INewArticlePayload>('/articles', {
    article: {
      title,
      description,
      body,
      tagList,
    },
  })
}
