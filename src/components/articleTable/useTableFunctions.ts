import { useState } from 'react'
import type { IArticle } from '../../services/types'
import { useMutation } from '@tanstack/react-query'
import { deleteArticle } from '../../services/api'
import { showToast } from '../../utils/showToast'

const ITEMS_PER_PAGE = 10
export default function useTableFunctions({
  articles,
}: {
  articles: IArticle[]
}) {
  const [currentPage, setCurrentPage] = useState(1)
  const [openMenuSlug, setOpenMenuSlug] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [deleteSlug, setDeleteSlug] = useState<string>('')
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentPosts = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const changePage = (page: number) => {
    console.log('page:', page)
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
  }

  const deleteArticleRequest = useMutation({
    mutationFn: ({ slug }: { slug: string }) => deleteArticle({ slug }),
    onSuccess: () => {
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
