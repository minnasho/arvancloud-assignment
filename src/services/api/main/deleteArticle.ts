import { request } from '../../axiosConfig'

export function deleteArticle({ slug }: { slug: string }) {
  return request.delete(`/articles/${slug}`)
}
