import { AuthLayout } from '../layouts/AuthLayout'
import { Input } from '../components'
import { useLoginRequest } from '../services/serciveCalls'
import { useFormLogic } from '../hooks'
import { loginSchema, type LoginFormData } from '../utils/formSchemas'

export function Login() {
  const { sendLoginRequest, isLoading } = useLoginRequest()
  const { handleSubmit, onSubmit, register, errors } =
    useFormLogic<LoginFormData>({
      schema: loginSchema,
      mutationFn: sendLoginRequest.mutateAsync,
    })
  return (
    <AuthLayout
      title={'Sign in'}
      alterWayHint={'Don’t have an account?'}
      alterWayText={'Sign up now'}
      alterWayLink={'/register'}
      onFormSubmit={handleSubmit(onSubmit)}
      isLoading={isLoading}
    >
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
