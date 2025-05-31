interface ISpinnerProps {
  size?: number
  color?: string // Tailwind color class (e.g., 'border-teal-500')
  bgColor?: string
}
export function LoadingSpinner({ size, color }: ISpinnerProps) {
  return (
    <div
      className={`animate-spin rounded-full border-2 border-solid border-gray-200 border-t-transparent ${color}`}
      style={{ width: size, height: size }}
    />
  )
}
