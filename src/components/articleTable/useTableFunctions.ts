import { useState } from 'react'
import {
  useDeleteArticleRequest,
  useGetArticlesRequest,
} from '../../services/serciveCalls'

const ITEMS_PER_PAGE = 10
export default function useTableFunctions() {
  const [currentPage, setCurrentPage] = useState(1)
  const [openMenuSlug, setOpenMenuSlug] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)
  const [deleteSlug, setDeleteSlug] = useState<string>('')
  const { deleteArticleRequest } = useDeleteArticleRequest()
  const { articles, articlesCount, isPending, isSuccess } =
    useGetArticlesRequest({
      page: currentPage,
      limit: 10,
      offset: currentPage === 1 ? 0 : currentPage * 10 - 10,
    })

  const totalPages = Math.ceil((articlesCount as number) / ITEMS_PER_PAGE)

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(() => page)
  }

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
    changePage,
    handleDelete,
    setOpenMenuSlug,
    setShowModal,
    totalPages,
    articles,
    articlesCount,
    isPending,
    isSuccess,
  }
}
