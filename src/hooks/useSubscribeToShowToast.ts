import { useEffect, useState } from 'react'
import type { IMessage } from '../utils/showToast'

export function useSubscribeToShowToast() {
  const [messages, setMessages] = useState<IMessage[]>()

  useEffect(() => {
    const handleSnackbar = () => {
      const messages = JSON.parse(localStorage.getItem('toastMessages') ?? '[]')
      setMessages(messages)
    }
    const rootElement = document.getElementById('root')
    rootElement?.addEventListener('showSnackbar', handleSnackbar)

    return () => {
      rootElement?.removeEventListener('rootElement', handleSnackbar)
    }
  }, [])

  return { messages }
}
