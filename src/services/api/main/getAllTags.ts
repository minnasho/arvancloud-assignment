import { request } from '../../axiosConfig'
import type { ITagsResponse } from '../../types'

export function getAllTags() {
  return request.get<ITagsResponse>('tags')
}
