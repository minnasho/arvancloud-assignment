import { request } from '../../axiosConfig'

interface ILoginPayload {
  user: {
    email: string
    password: string
  }
}

export function login({ user }: ILoginPayload) {
  return request.post('/users/login', { user })
}
