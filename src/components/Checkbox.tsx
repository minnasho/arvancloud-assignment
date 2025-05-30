interface ICheckboxProps {
  label?: string
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  className?: string
}

export function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  className = '',
}: ICheckboxProps) {
  return (
    <label
      className={`flex cursor-pointer items-center gap-2 select-none ${className}`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className="peer hidden"
      />
      <div
        className={`flex h-5 w-5 items-center justify-center rounded border-2 transition ${checked ? 'border-teal-500 bg-teal-500' : 'border-gray-400 bg-white'} peer-disabled:opacity-50`}
      >
        {checked && (
          <svg
            className="h-3 w-3 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      {label && <span className="text-sm">{label}</span>}
    </label>
  )
}
