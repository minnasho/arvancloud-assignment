import { request } from '../../axiosConfig'

export interface IRegisterPayload {
  user: {
    email: string
    password: string
    username: string
  }
}

export function register({ user }: IRegisterPayload) {
  return request.post('/users', { user })
}
