interface IMenuItemProps {
  title: string
  onClick: () => void
}
interface IFloatingMenuProps {
  isMenuOpen: boolean
  className?: string
  mneuItems: IMenuItemProps[]
}
export function FloatingMenu({ mneuItems }: IFloatingMenuProps) {
  return (
    <div className="absolute top-4 right-4 z-10 w-36 rounded-xl bg-white p-2 shadow-xl">
      {mneuItems.map((item) => (
        <button
          key={item.title}
          onClick={item.onClick}
          className="block w-full rounded px-2 py-2 text-left font-medium text-black hover:bg-gray-200"
        >
          {item.title}
        </button>
      ))}
    </div>
  )
}
