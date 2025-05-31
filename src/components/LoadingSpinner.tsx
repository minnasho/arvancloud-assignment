interface ISpinnerProps {
  size?: number
  color?: string // Tailwind color class (e.g., 'border-teal-500')
  bgColor?: string
  className?: string
}
export function LoadingSpinner({ size, color, className }: ISpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full border-2 border-solid border-gray-200 border-t-transparent ${color} ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
