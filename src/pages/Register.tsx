import { Input } from '../components'
import { useRegisterRequest } from '../services/serciveCalls'
import { useFormLogic } from '../hooks'
import { AuthLayout } from '../layouts/AuthLayout'
import { registerSchema, type RegisterFormData } from '../utils/formSchemas'

export function Register() {
  const { sendRegisterRequest } = useRegisterRequest()
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
    >
      <div className="mb-4">
        <Input
          register={register}
          errors={errors}
          label="Username"
          type="text"
          inputName="username"
        />
      </div>
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
