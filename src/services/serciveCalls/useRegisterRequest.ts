import { useMutation } from '@tanstack/react-query'
import { register } from '../../services/api/auth/register'
import { useNavigate } from 'react-router'
import { showToast } from '../../utils/showToast'

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
    onError: (error: string[]) => {
      console.log('mutation error:', error)
      for (let i = 0; i < error.length; i++) {
        showToast({
          title: 'Sign-up Failed!',
          message: error[i],
          type: 'error',
        })
      }
    },
  })
  return { sendRegisterRequest, isLoading: sendRegisterRequest.isPending }
}
