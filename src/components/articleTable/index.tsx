import { Warning } from '../icons'
import { Modal } from '../modal'
import { TableHead, TableBody, Pagination } from './components'
import useTableFunctions from './useTableFunctions'
import { LoadingSpinner } from '../LoadingSpinner'

export function ArticleTable() {
  const {
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
    articles: currentPosts,
    isPending,
  } = useTableFunctions()

  return (
    <div className="bg-neutral-bg1-default mx-auto h-[560px] w-80 overflow-x-auto rounded-lg shadow-sm md:h-fit md:w-full">
      <h2 className="border-neutral-st3-default flex h-[100px] min-h-24 items-center border-b p-6 text-lg font-semibold">
        All Posts
      </h2>
      <div className="w-full p-6">
        <table className="w-full table-auto border-collapse">
          <TableHead />
          {isPending && (
            <LoadingSpinner
              className="mt-[50%] ml-[50%] translate-x-[-50%] translate-y-[-50%]"
              size={50}
              color="border-4 border-primary-bg2-default"
            />
          )}
          {currentPosts && (
            <TableBody
              articleList={currentPosts}
              openMenuSlug={openMenuSlug}
              setOpenMenuSlug={setOpenMenuSlug}
              setDeleteSlug={setDeleteSlug}
              setShowModal={setShowModal}
            />
          )}
        </table>
      </div>
      <div className="flex items-center justify-end p-6">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          changePage={changePage}
        />
      </div>

      <Modal
        isOpen={showModal}
        onConfirm={() => handleDelete(deleteSlug)}
        onCancel={() => {
          setShowModal(false)
          setOpenMenuSlug(null)
        }}
      >
        <div className="bg-error-bg1-default flex h-14 w-14 items-center justify-center rounded-full">
          <Warning color="var(--error-fg1-default)" />
        </div>
        <p>Are you sure you want to delete this article?</p>
      </Modal>
    </div>
  )
}
