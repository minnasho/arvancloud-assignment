import { AuthLayout } from '../layouts/AuthLayout'
import { useLoginLogics } from '../hooks'
import { Input } from '../components'

export function Login() {
  const { handleSubmit, onSubmit, register, errors } = useLoginLogics()
  return (
    <AuthLayout
      title={'Sign in'}
      alterWayHint={'Don’t have an account?'}
      alterWayText={'Sign up now'}
      alterWayLink={'#'}
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
