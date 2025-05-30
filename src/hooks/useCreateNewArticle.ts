import { useMutation } from '@tanstack/react-query'
import {
  createNewArticle,
  updateArticle,
  type IUpdateArticle,
} from '../services/api'
import type { INewArticleData } from '../services/types'
import { useNavigate } from 'react-router'
import { showToast } from '../utils/showToast'

export function useCreateNewArticle() {
  const navigate = useNavigate()
  const submitNewArticle = useMutation({
    mutationFn: (payload: INewArticleData) => createNewArticle({ ...payload }),
    onSuccess: () => {
      void navigate('/articles', { replace: true })
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
  const submitUpdatedArticle = useMutation({
    mutationFn: ({ slug, data }: IUpdateArticle) =>
      updateArticle({ slug, data }),
    onSuccess: () => {
      void navigate('/articles', { replace: true })
      showToast({
        title: 'Well done!',
        message: 'Article updated successfuly',
        type: 'success',
      })
    },
    onError: (error: string[]) => {
      console.log('update error:', error)
      for (let i = 0; i < error.length; i++) {
        showToast({
          title: 'Update Failed!',
          message: error[i],
          type: 'error',
        })
      }
    },
  })
  return { submitNewArticle, submitUpdatedArticle }
}
