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
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export function Input({
  register,
  errors,
  label,
  type,
  inputName,
  placeholder = 'sample text',
  value,
  onChange,
  onKeyDown,
}: IInputProps) {
  return (
    <div className="mb-4">
      <label className="mb-1 block">{label}</label>
      <input
        type={type}
        {...(register && { ...register(`${inputName}`) })}
        className={`bg-neutral-bg1-default border-neutral-st2-default h-10 w-full rounded-lg border px-3 py-2 focus:ring focus:outline-none ${
          errors && errors[inputName]
            ? 'ring-error-fg1-default'
            : 'ring-primary-fg1-default'
        }`}
        placeholder={placeholder}
        value={value}
        onChange={onChange && onChange}
        onKeyDown={onKeyDown && onKeyDown}
      />
      {errors && errors[inputName] && (
        <p className="text-error-fg1-default mt-1 text-xs">
          {errors[inputName].message}
        </p>
      )}
    </div>
  )
}
