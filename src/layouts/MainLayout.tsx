import { useState } from 'react'
import { Navbar, SideMenu } from '../components'

export default function MainLayout({
  userName,
  children,
}: {
  userName: string
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="flex h-screen w-full flex-col bg-[#F0F0F0]">
      <Navbar
        userName={userName}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="flex flex-1">
        <SideMenu menuOpen={menuOpen} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}
