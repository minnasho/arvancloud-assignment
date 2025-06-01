import { useQuery } from '@tanstack/react-query'
import { getAllArticles } from '../api'

interface IUseGetArticlesRequest {
  page: number
  limit?: number
  offset?: number
}
export function useGetArticlesRequest({
  page,
  limit,
  offset,
}: IUseGetArticlesRequest) {
  const {
    data: response,
    isPending,
    isSuccess,
  } = useQuery({
    queryKey: ['articles', { page }],
    queryFn: () => getAllArticles({ limit, offset }),
  })
  return {
    articles: response?.data.articles,
    articlesCount: response?.data.articlesCount,
    isPending,
    isSuccess,
  }
}
