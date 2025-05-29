import { type AxiosRequestConfig, type AxiosResponse } from 'axios'

export interface IRequest {
  get: <T>(
    endpoint: string,
    options?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>

  post: <T, U>(
    endpoint: string,
    data: U,
    options?: AxiosRequestConfig,
  ) => Promise<AxiosResponse<T>>

  put: (
    endpoint: string,
    data: unknown,
    options?: AxiosRequestConfig,
  ) => Promise<AxiosResponse>
}

export interface ILoginPayload {
  user: {
    email: string
    password: string
  }
}
export interface ILoginResponse {
  user: {
    id: number
    email: string
    username: string
    bio?: string
    image: string
    token: string
  }
}

interface IArticle {}
export interface IGetAllArticlesResponse {
  articles: IArticle[]
  articlesCount: number
}
