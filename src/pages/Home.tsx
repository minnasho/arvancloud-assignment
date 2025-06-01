import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from '../app/redux/hooks'
import { getAllArticles } from '../services/api/main/getAllArticles'
import MainLayout from '../layouts/MainLayout'
import { ArticleTable, LoadingSpinner } from '../components'

export function Home() {
  const { username } = useAppSelector((state) => state.authData)
  const { data: response, isPending } = useQuery({
    queryKey: ['articles'],
    queryFn: () => getAllArticles({}),
  })
  
  return (
    <MainLayout userName={username}>
      {isPending && (
        <LoadingSpinner
          className="mx-auto mt-64"
          size={100}
          color="border-4 border-primary-bg2-default"
        />
      )}
      {response && (
        <ArticleTable
          articles={response.data.articles}
          articlesCount={response.data.articlesCount}
        />
      )}
    </MainLayout>
  )
}
