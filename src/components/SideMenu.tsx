export function SideMenu({ menuOpen }: { menuOpen: boolean }) {
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
      } w-48 space-y-2 bg-white p-4 md:block`}
    >
      {menuItems.map((item) => (
        <a
          key={item.name}
          href={item.path}
          className="block rounded px-2 py-2 font-medium text-black hover:bg-gray-200"
        >
          {item.name}
        </a>
      ))}
    </aside>
  )
}
