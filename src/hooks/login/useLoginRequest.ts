import { useMutation } from '@tanstack/react-query'
import { login } from '../../services/api/auth/login'
import { useNavigate } from 'react-router'
import { showToast } from '../../utils/showToast'
import { useAppDispatch } from '../../app/store/hooks'
import { setAuthData } from '../../redux/authDataSlice'

interface ILoginRequest {
  email: string
  password: string
}
export function useLoginRequest() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const sendLoginRequest = useMutation({
    mutationFn: ({ email, password }: ILoginRequest) =>
      login({ user: { email, password } }),
    onSuccess: (response) => {
      console.log('mutation data:', response)
      const userData = response.data.user
      dispatch(setAuthData({ ...userData }))
      void navigate('/articles', { replace: true })
    },
    onError: (error: string[]) => {
      console.log('mutation error:', error)
      for (let i = 0; i < error.length; i++) {
        showToast({
          title: 'Sign-in Failed!',
          message: error[i],
          type: 'error',
        })
      }
      // error.map((errMsg) =>
      //   showToast({
      //     title: 'Sign-in Failed!',
      //     message: errMsg,
      //     type: 'error',
      //   }),
      // )
    },
  })
  return { sendLoginRequest }
}
