import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schema, type FormData } from '../../utils/constants/registerConsts'
import { useRegisterRequest } from './useRegisterRequest'

export function useRegisterLogics() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const { sendRegisterRequest } = useRegisterRequest()

  const onSubmit = async (data: FormData) => {
    const { username, email, password } = data
    await sendRegisterRequest.mutateAsync({ username, email, password })
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  }
}
