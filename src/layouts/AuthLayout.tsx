import { Link } from 'react-router'

interface IAuthLayoutProps {
  children: React.ReactNode
  title: 'Sign in' | 'Sign up'
  alterWayHint: string
  alterWayText: string
  alterWayLink: string
  onFormSubmit: () => void
}

export function AuthLayout({
  children,
  title,
  alterWayHint,
  alterWayText,
  alterWayLink,
  onFormSubmit,
}: IAuthLayoutProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={onFormSubmit}
        id="formBox"
        className="mx-auto w-full max-w-sm p-8 md:max-w-md md:rounded-lg md:bg-white md:shadow-md"
      >
        <h2 className="mb-6 text-2xl font-bold">{title}</h2>
        <div id="content">{children}</div>
        <button
          type="submit"
          className="w-full rounded-md bg-teal-600 py-2 font-semibold text-white transition hover:bg-teal-700"
        >
          {title}
        </button>
        <p className="mt-4 text-center text-sm">
          {alterWayHint}{' '}
          <Link to={alterWayLink} className="text-blue-600 hover:underline">
            {alterWayText}
          </Link>
        </p>
      </form>
    </div>
  )
}
