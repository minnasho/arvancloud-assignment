import type { InternalAxiosRequestConfig } from 'axios'

export function requestHandler(request: InternalAxiosRequestConfig<any>) {
  const { token } = JSON.parse(localStorage.getItem('userData') ?? '{}')
  if (request.headers) request.headers['Authorization'] = `Token ${token}`
  return request
}

//(error: (error: any) => any) | null, options?: AxiosInterceptorOptions) => number
export function onReqRejected(error: unknown | null) {
  console.log('request error:', error)
  return Promise.reject(error)
}
