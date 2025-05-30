import { useMutation } from '@tanstack/react-query'
import { showToast } from '../../utils/showToast'
import { updateArticle, type IUpdateArticle } from '../api'
import { useNavigate } from 'react-router'

export function useUpdateArticleRequest() {
  const navigate = useNavigate()

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
  return { submitUpdatedArticle }
}
