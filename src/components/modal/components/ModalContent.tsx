export function ModalContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-[132px] max-h-[456px] flex-col items-center justify-center gap-4 p-6">
      {children}
    </div>
  )
}
