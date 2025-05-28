import { BrowserRouter, Route, Routes } from 'react-router'
import { Home, Login, Register } from '../pages'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './config/queryClient'

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
