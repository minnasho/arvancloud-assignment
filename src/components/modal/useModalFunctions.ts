import { useEffect, useRef } from 'react'

export function useModalFunctions({ isOpen }: { isOpen: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (isOpen) {
      if (!dialog.open) dialog.showModal()
    } else {
      if (dialog.open) dialog.close()
    }
  }, [isOpen])

  return { dialogRef }
}
