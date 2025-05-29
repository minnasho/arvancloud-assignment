import { AuthLayout } from '../layouts/AuthLayout'
import { Input } from '../components'
import { useLoginRequest } from '../hooks/login/useLoginRequest'
import { useAuthLogic } from '../hooks/useAuthLogic'
import { loginSchema, type LoginFormData } from '../utils/authSchemas'

export function Login() {
  const { sendLoginRequest } = useLoginRequest()
  const { handleSubmit, onSubmit, register, errors } =
    useAuthLogic<LoginFormData>({
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
    >
      <div className="mb-4">
        <Input
          register={register}
          errors={errors}
          label="Email"
          type="email"
          inputName="email"
        />
      </div>
      <div className="mb-6">
        <Input
          register={register}
          errors={errors}
          label="Password"
          type="password"
          inputName="password"
        />
      </div>
    </AuthLayout>
  )
}
