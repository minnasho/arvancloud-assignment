interface IInputProps {
  register?: any
  errors?: any
  label: string
  type: 'email' | 'password' | 'text'
  inputName:
    | 'email'
    | 'password'
    | 'username'
    | 'title'
    | 'body'
    | 'description'
    | 'tags'
  placeholder?: string
  value?: string | null
}

export function Input({
  register,
  errors,
  label,
  type,
  inputName,
  placeholder = 'sample text',
  value,
}: IInputProps) {
  return (
    <>
      <label className="mb-1 block">{label}</label>
      <input
        type={type}
        {...register(`${inputName}`)}
        className={`bg-neutral-bg1-default border-neutral-st2-default h-10 w-full rounded-lg border px-3 py-2 focus:ring focus:outline-none ${
          errors[inputName] ? 'ring-error-fg1-default' : 'ring-primary-fg1'
        }`}
        placeholder={placeholder}
        value={value}
      />
      {errors[inputName] && (
        <p className="text-error-fg1-default mt-1 text-xs">
          {errors[inputName].message}
        </p>
      )}
    </>
  )
}
