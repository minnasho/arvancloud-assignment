interface IToastProps {
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

export function Toast({ type = 'success', title, description }: IToastProps) {
  const baseClasses =
    'px-4 py-3 mb-8 rounded-2xl shadow-md flex items-center space-x-2 text-sm font-medium absolute top-4 right-1/2 transform translate-x-1/2'
  const typeClasses = {
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
  }

  return (
    <div className={`${baseClasses} ${typeClasses[type]}`}>
      <span className="font-bold">{title}</span>
      {description && <span>{description}</span>}
    </div>
  )
}
