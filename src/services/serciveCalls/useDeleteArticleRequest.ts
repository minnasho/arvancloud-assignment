import { useMutation } from '@tanstack/react-query'
import { deleteArticle } from '../api'
import { queryClient } from '../../app/queryClient'
import { showToast } from '../../utils/showToast'

export function useDeleteArticleRequest() {
  const deleteArticleRequest = useMutation({
    mutationFn: ({ slug }: { slug: string }) => deleteArticle({ slug }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] })
      showToast({
        title: '',
        message: 'Article deleted successfuly',
        type: 'success',
      })
    },
  })
  return { deleteArticleRequest }
}
