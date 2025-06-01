import { useState } from 'react'
import { Header, Sidebar } from '../components'

export default function MainLayout({
  userName,
  children,
}: {
  userName: string
  children: React.ReactNode
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="bg-neutral-bg2-default flex h-screen w-full flex-col pt-16">
      <Header
        userName={userName}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      <div className="flex flex-1">
        <Sidebar menuOpen={menuOpen} />
        <main className="flex-1 p-4">{children}</main>
      </div>
    </div>
  )
}
