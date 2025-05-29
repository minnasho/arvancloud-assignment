import type { AxiosResponse } from 'axios'

export function onResFullfilled(res: AxiosResponse<any, any>) {
  return res
}

export function onResRejected(error: Record<string, any>) {
  console.log('response error:', error)
  const errData = error.response.data.errors
  const errorMessages = Object.entries(errData).map(
    ([key, messages]) => `${key} ${(messages as string)[0]}`,
  )
  return Promise.reject(errorMessages)
}
