interface IPaginationProps {
  changePage: (targetPage: number) => void
  currentPage: number
  totalPages: number
}
export function Pagination({
  totalPages,
  currentPage,
  changePage,
}: IPaginationProps) {
  console.log('totalPages', totalPages)
  return (
    <div className="border-neutral-st2-default mb-6 flex h-10 w-fit max-w-80 items-center justify-center gap-2 rounded-lg border p-4">
      <button
        id="before"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="hover:text-primary-fg1-default cursor-pointer px-3 py-1 font-semibold disabled:opacity-40"
      >
        ‹
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .slice(Math.max(0, currentPage - 3), currentPage + 2)
        .map((page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`h-8 w-8 cursor-pointer rounded-lg font-semibold ${
              page === currentPage
                ? 'bg-primary-bg2-default text-neutral-fg3-default'
                : 'hover:bg-primary-bg1 hover:text-primary-fg1-default hover:border hover:border-primary-bg2-default'
            }`}
          >
            {page}
          </button>
        ))}
      <button
        id="after"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="hover:text-primary-fg1-default cursor-pointer px-3 py-1 font-semibold disabled:opacity-40"
      >
        ›
      </button>
    </div>
  )
}
