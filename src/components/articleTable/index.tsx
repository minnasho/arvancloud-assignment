import type { IArticle } from '../../services/types'
import { Modal } from '../Modal'
import { TableHead, TableBody, Pagination } from './components'
import useTableFunctions from './useTableFunctions'

interface IArticleProps {
  articles: IArticle[]
}

export function ArticleTable({ articles }: IArticleProps) {
  const {
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
  } = useTableFunctions({ articles: articles })

  return (
    <div className="mx-auto h-[560px] w-80 overflow-x-auto rounded-xl bg-white pb-4 shadow-sm md:max-h-[788px] md:w-full md:p-4 lg:w-full">
      <h2 className="mb-4 ml-4 text-lg font-semibold">All Posts</h2>
      <table className="w-full table-auto border-collapse p-4 text-sm">
        <TableHead />
        <TableBody
          articleList={currentPosts}
          openMenuSlug={openMenuSlug}
          setOpenMenuSlug={setOpenMenuSlug}
          setDeleteSlug={setDeleteSlug}
          setShowModal={setShowModal}
        />
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        changePage={changePage}
      />
      <Modal
        isOpen={showModal}
        onConfirm={() => handleDelete(deleteSlug)}
        onCancel={() => {
          setShowModal(false)
          setOpenMenuSlug(null)
        }}
      />
    </div>
  )
}
