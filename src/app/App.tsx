import { BrowserRouter } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/queryClient'
import { AppRouter } from './router'
import { useSubscribeToShowToast } from '../hooks/useSubscribeToShowToast'
import { Toast } from '../components/Toast'

function App() {
  const { messages } = useSubscribeToShowToast()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRouter />
        {messages?.map((message) => (
          <Toast
            key={message.id}
            title={message.title}
            description={message.message}
            type={message.type}
          />
        ))}
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
