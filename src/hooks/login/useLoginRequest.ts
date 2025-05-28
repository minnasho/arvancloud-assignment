import { useMutation } from '@tanstack/react-query'
import { login } from '../../services/api/auth/login'
import { useNavigate } from 'react-router'

interface ILoginRequest {
  email: string 
  password: string
}
export function useLoginRequest() {
  const navigate = useNavigate()
  const sendLoginRequest = useMutation({
    mutationFn: ({ email, password }: ILoginRequest) =>
      login({ user: { email, password } }),
    onSuccess: () => {
      void navigate('/', { replace: true })
    },
    onError: () => {},
  })
  return { sendLoginRequest }
}
