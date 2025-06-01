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
    <div className="bg-neutral-bg1-default mx-auto h-[560px] w-80 overflow-x-auto rounded-lg shadow-sm md:h-fit md:w-full">
      <h2 className="border-neutral-st3-default flex h-[100px] min-h-24 items-center border-b p-6 text-lg font-semibold">
        All Posts
      </h2>
      <div className="w-full p-6">
        <table className="table-auto border-collapse text-sm">
          <TableHead />
          <TableBody
            articleList={currentPosts}
            openMenuSlug={openMenuSlug}
            setOpenMenuSlug={setOpenMenuSlug}
            setDeleteSlug={setDeleteSlug}
            setShowModal={setShowModal}
          />
        </table>
      </div>

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
