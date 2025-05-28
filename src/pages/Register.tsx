import { Input } from '../components'
import { useRegisterLogics } from '../hooks'
import { AuthLayout } from '../layouts/AuthLayout'

export function Register() {
  const { handleSubmit, onSubmit, register, errors } = useRegisterLogics()
  return (
    <AuthLayout
      title={'Sign up'}
      alterWayHint={'Have an account?'}
      alterWayText={'Sign in'}
      alterWayLink={'#'}
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
