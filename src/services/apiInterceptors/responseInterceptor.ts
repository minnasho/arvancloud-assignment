import type { AxiosResponse } from 'axios'

export function onResFullfilled(res: AxiosResponse<any, any>) {
  return res
}

export function onResRejected(error: unknown | null) {
  console.log('response error:', error)
}
