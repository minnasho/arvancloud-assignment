import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from '../app/redux/hooks'
import { getAllArticles } from '../services/api/main/getAllArticles'
import MainLayout from '../layouts/MainLayout'
import { ArticleTable } from '../components'

export function Home() {
  const { username } = useAppSelector((state) => state.authData)
  const { data: response } = useQuery({
    queryKey: ['articles'],
    queryFn: () => getAllArticles(),
  })
  console.log('articles data:', response)
  return (
    <MainLayout userName={username}>
      {response && <ArticleTable articles={response.data.articles} />}
    </MainLayout>
  )
}
