import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, type DefaultValues } from 'react-hook-form'
import type { ZodType } from 'zod'

interface IAuthLogicParams<T> {
  formData?: Record<string, unknown>
  schema: ZodType<T>
  mutationFn: (data: T) => Promise<any>
  formDefaultValue?: DefaultValues<T>
}

export function useAuthLogic<T extends Record<string, any>>({
  schema,
  mutationFn,
  formDefaultValue,
}: IAuthLogicParams<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<T>({
    resolver: zodResolver(schema),
    defaultValues: formDefaultValue,
  })

  const onSubmit = async (data: T) => {
    await mutationFn({ ...data })
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    reset,
  }
}
