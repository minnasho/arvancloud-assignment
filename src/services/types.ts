import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

export interface IRequest {
  get: <T>(
    endpoint: string,
    options?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>

  post: (
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => Promise<AxiosResponse>

  put: (
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => Promise<AxiosResponse>
}
