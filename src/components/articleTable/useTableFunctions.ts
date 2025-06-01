import { useState } from 'react'
import { useInfiniteQuery, useMutation } from '@tanstack/react-query'
import { deleteArticle, getAllArticles } from '../../services/api'
import { showToast } from '../../utils/showToast'
import type { IArticleProps } from '.'
import { queryClient } from '../../app/queryClient'

const ITEMS_PER_PAGE = 10
export default function useTableFunctions({
  articles,
  articlesCount,
}: IArticleProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [openMenuSlug, setOpenMenuSlug] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [deleteSlug, setDeleteSlug] = useState<string>('')
  const totalPages = Math.ceil(articlesCount / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentPosts = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const { hasNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['articles', currentPage],
    queryFn: ({ pageParam = 0 }) =>
      getAllArticles({ limit: ITEMS_PER_PAGE, offset: pageParam }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.flatMap((p) => p.data.articles).length
      return totalLoaded < lastPage.data.articlesCount ? totalLoaded : undefined
    },
  })

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
    if (hasNextPage) fetchNextPage()
  }

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

  const handleDelete = (slug: string) => {
    deleteArticleRequest.mutate({ slug })
    setShowModal(false)
    setOpenMenuSlug(null)
  }

  return {
    openMenuSlug,
    showModal,
    deleteSlug,
    setDeleteSlug,
    currentPage,
    currentPosts,
    changePage,
    handleDelete,
    setOpenMenuSlug,
    setShowModal,
    totalPages,
  }
}
