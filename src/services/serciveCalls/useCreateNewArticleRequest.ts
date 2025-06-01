import { useMutation } from '@tanstack/react-query'
import { createNewArticle } from '../api'
import type { INewArticleData } from '../types'
import { useNavigate } from 'react-router'
import { showToast } from '../../utils/showToast'
import { queryClient } from '../../app/queryClient'

export function useCreateNewArticleRequest() {
  const navigate = useNavigate()
  const submitNewArticle = useMutation({
    mutationFn: (payload: INewArticleData) => createNewArticle({ ...payload }),
    onSuccess: () => {
      void navigate('/articles', { replace: true })
      queryClient.invalidateQueries({ queryKey: ['articles'] })
      showToast({
        title: 'Well done!',
        message: 'Article created successfuly',
        type: 'success',
      })
    },
    onError: (error: string[]) => {
      console.log('create error:', error)
      for (let i = 0; i < error.length; i++) {
        showToast({
          title: 'Create New Article Failed!',
          message: error[i],
          type: 'error',
        })
      }
    },
  })

  return { submitNewArticle }
}
