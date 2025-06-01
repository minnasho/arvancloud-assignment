import { useNavigate } from 'react-router'
import { useAppDispatch } from '../app/redux/hooks'
import { clearAuthData } from '../app/redux/slices/authDataSlice'

export function useLogout() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return () => {
    dispatch(clearAuthData())
    navigate('/login', { replace: true })
  }
}
