import { useMutation } from '@tanstack/react-query'
import { createNewArticle } from '../services/api'
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
    onError: () => {},
  })
  return { submitNewArticle }
}
