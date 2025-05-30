import { Route, Routes } from 'react-router'
import { Home, Login, NewArticle, Register } from '../../pages'
import { SecureRoutes } from './SecureRoutes'

export function AppRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<SecureRoutes isAuthenticated={true} />}>
        <Route path="/articles" element={<Home />} />
        <Route path="/articles/page/:page" element={<Home />} />
        <Route path="/articles/create" element={<NewArticle />} />
        <Route path="/articles/edit/:slug" element={<NewArticle />} />
      </Route>
    </Routes>
  )
}
