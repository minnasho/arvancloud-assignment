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
}

export function Input({
  register,
  errors,
  label,
  type,
  inputName,
  placeholder = 'sample text',
}: IInputProps) {
  return (
    <>
      <label className="mb-1 block text-sm font-medium">{label}</label>
      <input
        type={type}
        {...register(`${inputName}`)}
        className={`w-full rounded-md border px-3 py-2 focus:ring-2 focus:outline-none ${
          errors[inputName]
            ? 'border-red-500 ring-red-200'
            : 'border-gray-300 focus:ring-teal-200'
        }`}
        placeholder={placeholder}
      />
      {errors[inputName] && (
        <p className="mt-1 text-sm text-red-600">{errors[inputName].message}</p>
      )}
    </>
  )
}
