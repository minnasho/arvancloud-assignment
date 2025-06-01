import { useEffect, useRef } from 'react'
import { Button } from './Button'

interface IModalProps {
  children: React.ReactNode
  isOpen: boolean
  title?: string
  message?: string
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
}
export function Modal({
  isOpen,
  title = 'Delete Article',
  confirmText = 'Delete',
  cancelText = 'Cancel',
  onConfirm,
  onCancel,
  children,
}: IModalProps) {
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

  return (
    <dialog
      ref={dialogRef}
      className="top-1/2 left-1/2 w-[456px] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-300 shadow-xl backdrop:bg-black/30"
      onCancel={onCancel}
    >
      <div
        id="modalHeader"
        className="border-neutral-st3-default mb-4 flex h-14 items-center gap-2 border-b px-6 py-4"
      >
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>
      <div
        id="modalContent"
        className="flex h-[132px] max-h-[456px] flex-col items-center justify-center gap-4 p-6"
      >
        {children}
      </div>

      <div
        id="modalActions"
        className="border-neutral-st3-default mt-6 flex h-[72px] items-center justify-end gap-3 border-t px-6 py-4"
      >
        <Button
          title={confirmText}
          onClick={onConfirm}
          role={'button'}
          btnType={'danger'}
          className="w-20"
        />
        <Button
          title={cancelText}
          onClick={onCancel}
          role={'button'}
          btnType={'secondary'}
          className="w-20"
        />
      </div>
    </dialog>
  )
}
