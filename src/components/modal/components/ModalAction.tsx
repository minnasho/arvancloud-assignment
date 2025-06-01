import { Button } from '../../Button'

interface IMModalActionProps {
  confirmText: string
  cancelText: string
  onConfirm: () => void
  onCancel: () => void
}
export function ModalAction({
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: IMModalActionProps) {
  return (
    <div className="border-neutral-st3-default mt-6 flex h-[72px] items-center justify-end gap-3 border-t px-6 py-4">
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
  )
}
