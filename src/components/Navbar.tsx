interface INavbarProps {
  userName: string
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export function Navbar({ userName, menuOpen, setMenuOpen }: INavbarProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#E6E6E6] bg-white px-4 py-3">
      <span className="hidden md:inline">Welcome &lt;{userName}&gt;</span>
      <h1 className="hidden text-center text-lg font-semibold md:ml-8 md:block md:text-left">
        Arvancloud Challenge
      </h1>
      <button
        className="md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? '✖️' : '☰'}
      </button>
      <button className="rounded bg-white px-4 py-1 text-black">Log out</button>
    </header>
  )
}
