import type React from 'react'
import { FloatingMenu } from '../../FloatingMenu'
import type { IArticle } from '../../../services/types'
import { useNavigate } from 'react-router'

interface ITableBodyProps {
  articleList: IArticle[]
  openMenuSlug?: string | null
  setOpenMenuSlug: React.Dispatch<React.SetStateAction<string | null>>
  setDeleteSlug: React.Dispatch<React.SetStateAction<string>>
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export function TableBody({
  articleList,
  openMenuSlug = null,
  setOpenMenuSlug,
  setDeleteSlug,
  setShowModal,
}: ITableBodyProps) {
  const navigate = useNavigate()
  return (
    <tbody>
      {articleList.map((post, index) => (
        <tr
          key={post.slug}
          className="border-neutral-st3-default relative h-12 border-b hover:bg-gray-50"
        >
          <td className="p-2">{index + 1}</td>
          <td className="p-2 font-semibold">{post.title}</td>
          <td className="p-2">{post.author.username}</td>
          <td className="p-2">{post.tagList.join(', ')}</td>
          <td className="p-2">{`${post.description.slice(0, 20)}...`}</td>
          <td className="p-2">
            {new Date(post.createdAt).toLocaleString('en-US')}
          </td>
          <td className="relative p-2 text-right">
            <button
              onClick={() =>
                setOpenMenuSlug((prev) =>
                  prev === post.slug ? null : post.slug,
                )
              }
              className="rounded px-2 py-1 text-sm hover:bg-gray-200"
            >
              ⋯
            </button>
            {openMenuSlug === post.slug && (
              <FloatingMenu
                isMenuOpen={openMenuSlug === post.slug}
                mneuItems={[
                  {
                    title: 'Edit',
                    onClick: () => {
                      navigate(`/articles/edit/${post.slug}`)
                      setOpenMenuSlug(null)
                    },
                  },
                  {
                    title: 'Delete',
                    onClick: () => {
                      setShowModal(true)
                      setDeleteSlug(() => post.slug)
                    },
                  },
                ]}
              />
            )}
          </td>
        </tr>
      ))}
    </tbody>
  )
}
