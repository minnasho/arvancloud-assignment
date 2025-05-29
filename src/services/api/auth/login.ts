import { request } from '../../axiosConfig'
import type { ILoginPayload, ILoginResponse } from '../../types'

export function login({ user }: ILoginPayload) {
  return request.post<ILoginResponse, ILoginPayload>('/users/login', { user })
}
