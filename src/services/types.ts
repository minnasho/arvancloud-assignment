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

export interface IArticle {
  slug: string
  title: string
  description: string
  body: string
  tagList: string[]
  createdAt: string
  updatedAt: string
  favorited: boolean
  favoritesCount: number
  author: {
    username: string
    bio?: string
    image: string
    following: boolean
  }
}
export interface IGetAllArticlesResponse {
  articles: IArticle[]
  articlesCount: number
}
