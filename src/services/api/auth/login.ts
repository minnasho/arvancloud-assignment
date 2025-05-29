import { request } from '../../axiosConfig'

interface ILoginPayload {
  user: {
    email: string
    password: string
  }
}
interface ILoginResponse {
  user: {
    id: number
    email: string
    username: string
    bio?: string
    image: string
    token: string
  }
}

export function login({ user }: ILoginPayload) {
  return request.post<ILoginResponse, ILoginPayload>('/users/login', { user })
}
