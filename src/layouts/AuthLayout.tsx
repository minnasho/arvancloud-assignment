import { Link } from 'react-router'
import { Button, LoadingSpinner } from '../components'

interface IAuthLayoutProps {
  children: React.ReactNode
  title: 'Sign in' | 'Sign up'
  alterWayHint: string
  alterWayText: string
  alterWayLink: string
  isLoading: boolean
  onFormSubmit: () => void
}

export function AuthLayout({
  children,
  title,
  alterWayHint,
  alterWayText,
  alterWayLink,
  isLoading,
  onFormSubmit,
}: IAuthLayoutProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={onFormSubmit}
        id="formBox"
        className="md:bg-neutral-bg1-default mx-auto w-full max-w-sm md:max-w-md md:rounded-lg md:shadow-md"
      >
        <h2 className="flex h-[100px] min-h-[92px] items-center p-6 text-xl font-semibold">
          {title}
        </h2>
        <div className="md:border-t-neutral-st3-default p-6 md:border-t">
          <div id="content">{children}</div>
          <Button
            role="submit"
            title={
              isLoading ? (
                <LoadingSpinner
                  size={20}
                  color="border-neutral-fg3-default/40"
                />
              ) : (
                title
              )
            }
            btnType="primary"
          />
          <p className="mt-4 text-center">
            {alterWayHint}{' '}
            <Link
              to={alterWayLink}
              className="text-pt-info-t2-fg1-default font-semibold hover:underline"
            >
              {alterWayText}
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}
