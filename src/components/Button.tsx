import { LoadingSpinner } from './LoadingSpinner'

interface IButtonProps {
  title: string | React.ReactNode
  role?: 'button' | 'submit' | 'reset'
  btnType: 'primary' | 'secondary' | 'danger'
  className?: string
  isLoading?: boolean
  onClick?: () => void
}
export function Button({
  role = 'button',
  title,
  btnType,
  className,
  isLoading = false,
  onClick,
}: IButtonProps) {
  const baseClasses =
    'w-full h-10 rounded-xl min-w-[72px] px-4 weight-semibold transition cursor-pointer text-center flex items-center justify-center'
  const typeClasses = {
    primary:
      'text-neutral-fg3-default bg-primary-bg2-default hover:bg-primary-bg2-hover',
    secondary:
      'text-neutral-fg1-default bg-neutral-bg1-default border border-neutral-st2-default hover:shadow-md',
    danger:
      'text-neutral-fg3-default bg-error-bg2-default hover:bg-error-bg2-hover',
  }
  return (
    <button
      onClick={onClick && onClick}
      type={role}
      className={`${baseClasses} ${typeClasses[btnType]} ${className}`}
    >
      {isLoading ? (
        <LoadingSpinner size={20} color="border-neutral-fg3-default/40" />
      ) : (
        title
      )}
    </button>
  )
}
