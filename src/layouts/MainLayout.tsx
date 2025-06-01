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
      <div className="flex">
        <Sidebar menuOpen={menuOpen} />
        <main className="ml-60 flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
