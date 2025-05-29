import type { InternalAxiosRequestConfig } from 'axios'

export function onReqFullfilled(request: InternalAxiosRequestConfig<any>) {
  if (request.headers) {
    request.headers['Authorization'] = `Token ${'token'}`
  }
  return request
}

//(error: (error: any) => any) | null, options?: AxiosInterceptorOptions) => number
export function onReqRejected(error: unknown | null) {
  console.log('request error:', error)
  return Promise.reject(error)
}
