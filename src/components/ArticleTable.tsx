import { useState } from 'react'
import type { IArticle } from '../services/types'

interface IArticleProps {
  articles: IArticle[]
}

const ITEMS_PER_PAGE = 10

export function ArticleTable({ articles }: IArticleProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const currentPosts = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const changePage = (page: number) => {
    console.log('page:', page)
    if (page >= 1 && page <= totalPages) setCurrentPage(page)
  }

  return (
    <div className="mx-auto h-[560px] w-80 overflow-x-auto rounded-xl bg-white pb-4 shadow-sm md:h-fit md:w-full md:p-4 lg:w-full">
      <h2 className="mb-4 ml-4 text-lg font-semibold">All Posts</h2>
      <table className="w-full table-auto border-collapse p-4 text-sm">
        <thead className="sticky top-0 bg-gray-100">
          <tr>
            <th className="p-2 text-left">#</th>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">Author</th>
            <th className="p-2 text-left">Tags</th>
            <th className="p-2 text-left">Excerpt</th>
            <th className="p-2 text-left">Created</th>
            <th className="p-2 text-left"></th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((post, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2">{index + 1}</td>
              <td className="p-2 font-semibold">{post.title}</td>
              <td className="p-2">{post.author.username}</td>
              <td className="p-2">{post.tagList.join(', ')}</td>
              <td className="p-2">{`${post.description.slice(0, 20)}...`}</td>
              <td className="p-2">
                {new Date(post.createdAt).toLocaleString('en-US')}
              </td>
              <td className="p-2 text-right">
                <button className="rounded px-2 py-1 text-sm hover:bg-gray-200">
                  ⋯
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
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
    </div>
  )
}
