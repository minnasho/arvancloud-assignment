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
          className="border-neutral-st3-default hover:bg-primary-bg1 hover:text-primary-fg1-default relative h-12 border-b"
        >
          <td className="w-16 px-3 py-2 text-left">
            <div className="bg-neutral-bg2-default flex h-8 w-8 items-center justify-center rounded-sm">
              {index + 1}
            </div>
          </td>
          <td className="max-w-32 overflow-hidden px-3 py-2 text-left font-semibold text-nowrap text-ellipsis">
            {post.title}
          </td>
          <td className="w-48 max-w-48 px-3 py-2 text-left">
            {post.author.username}
          </td>
          <td className="max-w-28 overflow-hidden px-3 py-2 text-left text-nowrap text-ellipsis">
            {post.tagList.join(', ')}
          </td>
          <td className="max-w-[448px] px-3 py-2 text-left md:w-[448px]">{`${post.description.slice(0, 20)}...`}</td>
          <td className="max-w-32 px-3 py-2 text-left md:w-32">
            {new Date(post.createdAt).toLocaleDateString('en-US')}
          </td>
          <td className="relative w-16 px-3 py-2 text-left">
            <button
              onClick={() =>
                setOpenMenuSlug((prev) =>
                  prev === post.slug ? null : post.slug,
                )
              }
              className="border-neutral-st2-default hover:border-primary-fg1-default h-10 w-10 cursor-pointer rounded-xl border font-bold"
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
