import { zodResolver } from '@hookform/resolvers/zod'
import { schema, type FormData } from '../../utils/constants'
import { useForm } from 'react-hook-form'
import { useLoginRequest } from './useLoginRequest'

export function useLoginLogics() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const { sendLoginRequest } = useLoginRequest()

  const onSubmit = async (data: FormData) => {
    const { email, password } = data
    await sendLoginRequest.mutateAsync({ email, password })
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  }
}
