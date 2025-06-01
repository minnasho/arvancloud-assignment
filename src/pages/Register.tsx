import { Input } from '../components'
import { useRegisterRequest } from '../services/serciveCalls'
import { useFormLogic } from '../hooks'
import { AuthLayout } from '../layouts/AuthLayout'
import { registerSchema, type RegisterFormData } from '../utils/formSchemas'

export function Register() {
  const { sendRegisterRequest, isLoading } = useRegisterRequest()
  const { handleSubmit, onSubmit, register, errors } =
    useFormLogic<RegisterFormData>({
      schema: registerSchema,
      mutationFn: sendRegisterRequest.mutateAsync,
    })
  return (
    <AuthLayout
      title={'Sign up'}
      alterWayHint={'Have an account?'}
      alterWayText={'Sign in'}
      alterWayLink={'/login'}
      onFormSubmit={handleSubmit(onSubmit)}
      isLoading={isLoading}
    >
      <Input
        register={register}
        errors={errors}
        label="Username"
        type="text"
        inputName="username"
      />
      <Input
        register={register}
        errors={errors}
        label="Email"
        type="email"
        inputName="email"
      />
      <Input
        register={register}
        errors={errors}
        label="Password"
        type="password"
        inputName="password"
      />
    </AuthLayout>
  )
}
