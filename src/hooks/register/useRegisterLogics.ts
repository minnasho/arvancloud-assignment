import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { schema, type FormData } from '../../utils/constants/registerConsts'

export function useRegisterLogics() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    // your sign-in logic here
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  }
}
