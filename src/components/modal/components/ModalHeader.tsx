export function ModalHeader({ title }: { title: string }) {
  return (
    <div className="border-neutral-st3-default mb-4 flex h-14 items-center gap-2 border-b px-6 py-4">
      <h2 className="text-lg font-semibold">{title}</h2>
    </div>
  )
}
