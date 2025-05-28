import { zodResolver } from '@hookform/resolvers/zod'
import { schema, type FormData } from '../../utils/constants'
import { useForm } from 'react-hook-form'

export function useLoginLogics() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors
  }
}
