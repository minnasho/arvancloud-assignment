interface ITextAreaProps {
  children?: React.ReactNode
  value?: string
  setValue?: React.Dispatch<React.SetStateAction<string>>
  register?: any
  errors?: any
  label: string
  placeholder?: string
  inputName?: 'body'
}
export function Textarea({
  children,
  value,
  setValue,
  label,
  placeholder = 'sample text',
  register,
  errors,
  inputName = 'body',
}: ITextAreaProps) {
  return (
    <div className="mb-4">
      <label className="mb-1 block">{label}</label>
      <textarea
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        {...register(`${inputName}`)}
        className={`bg-neutral-bg1-default border-neutral-st2-default h-40 w-full resize-none rounded-lg border px-3 py-2 focus:ring focus:outline-none ${
          errors[inputName]
            ? 'ring-error-fg1-default'
            : 'ring-primary-fg1-default'
        }`}
        placeholder={placeholder}
        dir="ltr"
        maxLength={512}
      />
      {errors[inputName] && (
        <p className="text-error-fg1-default mt-1 text-xs">
          {errors[inputName].message}
        </p>
      )}
      {children && children}
    </div>
  )
}
