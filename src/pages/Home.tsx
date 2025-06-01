import { useAppSelector } from '../app/redux/hooks'
import MainLayout from '../layouts/MainLayout'
import { ArticleTable } from '../components'

export function Home() {
  const { username } = useAppSelector((state) => state.authData)
  return (
    <MainLayout userName={username}>
      <ArticleTable />
    </MainLayout>
  )
}
