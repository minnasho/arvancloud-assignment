import { useMutation } from '@tanstack/react-query'
import { register } from '../../services/api/auth/register'
import { useNavigate } from 'react-router'

interface IRegisterRequest {
  email: string
  password: string
  username: string
}
export function useRegisterRequest() {
  const navigate = useNavigate()
  const sendRegisterRequest = useMutation({
    mutationFn: ({ email, password, username }: IRegisterRequest) =>
      register({ user: { email, password, username } }),
    onSuccess: () => {
      navigate('/login', { replace: true })
    },
    onError: () => {},
  })
  return { sendRegisterRequest }
}
