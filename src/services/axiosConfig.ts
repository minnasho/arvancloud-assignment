import axios from 'axios'
import type { IRequest } from './types'
import {
  onResFullfilled,
  onResRejected,
  requestHandler,
} from './apiInterceptors'

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL

const api = axios.create({
  timeout: 60000,
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
})
api.interceptors.request.use((request) => requestHandler(request))
api.interceptors.response.use(onResFullfilled, onResRejected)

export const request: IRequest = {
  get: <T>(endpoint: string, options = {}) => api.get<T>(endpoint, options),

  post: <T, U>(endpoint: string, data: U, options = {}) =>
    api.post<T>(endpoint, Object.assign({}, data), options),

  put: <T, U>(endpoint: string, data: U, options = {}) =>
    api.put<T>(endpoint, Object.assign({}, data), options),
}
