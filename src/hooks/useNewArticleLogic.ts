import { useState } from 'react'
import { useCreateNewArticle } from './useCreateNewArticle'
import { newArticleSchema, type NewArticleFormData } from '../utils/authSchemas'
import { useAuthLogic } from './useAuthLogic'
import { useQuery } from '@tanstack/react-query'
import { getAllTags } from '../services/api'

export function useNewArticleLogic() {
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set())
  const [customTags, setCustomTags] = useState<string[]>([])
  const [newTagInput, setNewTagInput] = useState('')

  const { submitNewArticle } = useCreateNewArticle()
  const { handleSubmit, onSubmit, register, errors } =
    useAuthLogic<NewArticleFormData>({
      schema: newArticleSchema,
      mutationFn: submitNewArticle.mutateAsync,
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
  }
}
