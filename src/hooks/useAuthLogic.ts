import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { ZodType } from 'zod'

interface IAuthLogicParams<T> {
  formData?: Record<string, unknown>
  schema: ZodType<T>
  mutationFn: (data: T) => Promise<any>
}

export function useAuthLogic<T extends Record<string, any>>({
  schema,
  mutationFn,
}: IAuthLogicParams<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: T) => {
    await mutationFn({ ...data })
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  }
}
