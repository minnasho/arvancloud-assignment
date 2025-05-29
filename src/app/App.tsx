import { BrowserRouter } from 'react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/queryClient'
import { AppRouter } from './router'
import { useSubscribeToShowToast } from '../hooks/useSubscribeToShowToast'
import { Toast } from '../components/Toast'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  const { messages } = useSubscribeToShowToast()
  return (
    <Provider store={store}>
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
    </Provider>
  )
}

export default App
