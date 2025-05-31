import { useLogout } from '../hooks'
import { Button } from './Button'

interface INavbarProps {
  userName: string
  menuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function Navbar({ userName, menuOpen, setMenuOpen }: INavbarProps) {
  const logout = useLogout()

  return (
    <header className="flex h-16 items-center justify-between border-b border-[#E6E6E6] bg-white px-4 py-3">
      <span className="hidden md:inline">
        Welcome <strong>&lt;{userName}&gt;</strong>
      </span>
      <div className="bg-neutral-bg2-default hidden h-10 items-center rounded-sm px-3 py-2 text-center md:ml-8 md:flex md:text-left">
        <h1 className="text-[16px] font-semibold">Arvancloud Challenge</h1>
      </div>
      <button
        className="md:hidden"
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        {menuOpen ? '✖️' : '☰'}
      </button>
      <Button
        onClick={logout}
        title="Log out"
        btnType={'secondary'}
        className="h-10 max-w-24 min-w-[72px]"
      />
    </header>
  )
}
