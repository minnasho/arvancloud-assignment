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
  return (
    <div className="mt-4 flex items-center justify-center gap-2">
      <button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded border px-3 py-1 disabled:opacity-40"
      >
        ‹
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .slice(Math.max(0, currentPage - 3), currentPage + 2)
        .map((page) => (
          <button
            key={page}
            onClick={() => changePage(page)}
            className={`rounded border px-3 py-1 ${
              page === currentPage
                ? 'bg-teal-500 text-white'
                : 'hover:bg-gray-100'
            }`}
          >
            {page}
          </button>
        ))}
      <button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded border px-3 py-1 disabled:opacity-40"
      >
        ›
      </button>
    </div>
  )
}
