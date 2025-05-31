import { Link, useLocation } from 'react-router'

export function SideMenu({ menuOpen }: { menuOpen: boolean }) {
  const { pathname } = useLocation()

  const menuItems = [
    { name: 'All Articles', path: '/articles' },
    { name: 'New Article', path: '/articles/create' },
  ]

  return (
    <aside
      className={`${
        menuOpen
          ? 'absolute top-14 bottom-0 left-0 z-10 block md:top-16'
          : 'hidden'
      } w-60 space-y-2 bg-white p-4 md:block`}
    >
      {menuItems.map((item) => (
        <Link
          key={item.name}
          to={item.path}
          className={`${item.path === pathname ? 'bg-primary-bg1 text-primary-fg1-default hover:text-primary-fg1-hover' : 'hover:bg-neutral-bg1-hover hover:text-neutral-fg1-hover'} block rounded px-2 py-2 font-medium`}
        >
          {item.name}
        </Link>
      ))}
    </aside>
  )
}
