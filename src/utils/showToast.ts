interface IShowToastParams {
  title: string
  message: string
  type: 'success' | 'error' | 'info'
}
export interface IMessage {
  title: string
  message: string
  type: 'success' | 'error' | 'info'
  id: number
}
const messageArr: Array<IMessage> = JSON.parse(
  localStorage.getItem('toastMessages') ?? '[]',
)
export function showToast({ title, message, type }: IShowToastParams) {
  const showSnackbarEvent = new CustomEvent('showSnackbar')
  const rootElement = document.getElementById('root')

  const tid = setTimeout(() => {
    messageArr.shift()
    const showSnackbarEvent = new CustomEvent('showSnackbar')
    localStorage.setItem('toastMessages', JSON.stringify(messageArr))
    rootElement?.dispatchEvent(showSnackbarEvent)
  }, 5000)

  messageArr.unshift({ title, message, type, id: tid })

  if (messageArr.length > 3) {
    clearTimeout(messageArr[3].id)
    messageArr.length = 3
  }
  localStorage.setItem('toastMessages', JSON.stringify(messageArr))

  rootElement?.dispatchEvent(showSnackbarEvent)
}
