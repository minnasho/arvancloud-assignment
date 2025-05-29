import { useQuery } from '@tanstack/react-query'
import { useAppSelector } from '../app/store/hooks'
import { getAllArticles } from '../services/api/main/getAllArticles'

export function Home() {
  const { username } = useAppSelector((state) => state.authData)
  const { data } = useQuery({
    queryKey: ['articles'],
    queryFn: () => getAllArticles(),
  })
  console.log('articles data:', data)
  return <div>{username}</div>
}
