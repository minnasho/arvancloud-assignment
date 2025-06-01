import { useEffect, useState } from 'react'
import {
  useCreateNewArticleRequest,
  useUpdateArticleRequest,
} from '../services/serciveCalls'
import { newArticleSchema, type NewArticleFormData } from '../utils/formSchemas'
import { useFormLogic } from './useFormLogic'
import { useQuery } from '@tanstack/react-query'
import { getAllTags, getSingleArticle, updateArticle } from '../services/api'
import { useParams } from 'react-router'

export function useNewArticleLogic() {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [customTags, setCustomTags] = useState<string[]>([])
  const [newTagInput, setNewTagInput] = useState('')
  const { slug } = useParams()

  const { data: singleArticle } = useQuery({
    queryKey: ['singleArticle', slug],
    queryFn: () => getSingleArticle({ slug: slug ?? '' }),
    enabled: !!slug,
  })
  const { submitNewArticle } = useCreateNewArticleRequest()
  const { submitUpdatedArticle } = useUpdateArticleRequest()
  const { handleSubmit, onSubmit, register, errors, reset } =
    useFormLogic<NewArticleFormData>({
      schema: newArticleSchema,
      mutationFn: slug
        ? (data: NewArticleFormData) =>
            submitUpdatedArticle.mutateAsync({ slug, data })
        : submitNewArticle.mutateAsync,
    })
  const { data: response } = useQuery({
    queryKey: ['tagList'],
    queryFn: () => getAllTags(),
  })

  const sortedTags = [...(response?.data.tags || [])].sort((a, b) =>
    a.localeCompare(b),
  )

  const allTags = [...new Set([...sortedTags, ...customTags])]

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => {
      const updated = new Set(prev)
      if (updated.has(tag)) {
        updated.delete(tag)
      } else {
        updated.add(tag)
      }
      return updated
    })
  }
  const handleNewTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTagInput.trim() !== '') {
      e.preventDefault()
      const tag = newTagInput.trim()
      setCustomTags((prev) => (prev.includes(tag) ? prev : [...prev, tag]))
      setSelectedTags((prev) => new Set(prev).add(tag))
      setNewTagInput('')
    }
  }

  useEffect(() => {
    if (slug && singleArticle?.data) {
      reset({
        title: singleArticle.data.article.title,
        description: singleArticle.data.article.description,
        body: singleArticle.data.article.body,
      })
    }
  }, [slug, singleArticle])

  return {
    selectedTags,
    handleSubmit,
    onSubmit,
    register,
    errors,
    allTags,
    toggleTag,
    handleNewTagKeyDown,
    newTagInput,
    setNewTagInput,
    article: singleArticle?.data.article,
    editMode: !!slug,
    isNewArticleLoading: submitNewArticle.isPending,
    isUpdateArticleLoading: submitUpdatedArticle.isPending,
  }
}
