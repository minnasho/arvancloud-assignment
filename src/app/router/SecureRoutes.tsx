import { Navigate, Outlet } from 'react-router'

interface ISecureRouteProps {
  isAuthenticated: boolean
}

export const SecureRoutes = ({ isAuthenticated }: ISecureRouteProps) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}
