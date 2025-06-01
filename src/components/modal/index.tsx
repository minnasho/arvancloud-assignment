import { ModalHeader, ModalContent, ModalAction } from './components'
import { useModalFunctions } from './useModalFunctions'

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
  const { dialogRef } = useModalFunctions({ isOpen })

  return (
    <dialog
      ref={dialogRef}
      className="top-1/2 left-1/2 w-[456px] -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-300 shadow-xl backdrop:bg-black/30"
      onCancel={onCancel}
    >
      <ModalHeader title={title} />
      <ModalContent>{children}</ModalContent>
      <ModalAction
        confirmText={confirmText}
        cancelText={cancelText}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </dialog>
  )
}
