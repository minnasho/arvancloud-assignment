import type { NewArticleFormData } from '../utils/authSchemas'
import { Input } from './Input'

interface IArticleFormProps {
  register: any
  errors: any
  handleSubmit: any
  onSubmit: any
  selectedTags: Set<string>
}

export function ArticleForm({
  register,
  errors,
  handleSubmit,
  onSubmit,
  selectedTags,
}: IArticleFormProps) {
  return (
    <div id="articleForm" className="flex-1 rounded-lg bg-white">
      <div id="header" className="border-b border-[#E6E6E6] p-4">
        <h2 className="text-lg font-semibold">New Article</h2>
      </div>
      <div id="form" className="p-4">
        <div className="mb-4">
          <Input
            register={register}
            errors={errors}
            label="Title"
            type="text"
            inputName="title"
          />
        </div>
        <div className="mb-4">
          <Input
            register={register}
            errors={errors}
            label="Description"
            type="text"
            inputName="description"
          />
        </div>
        <div className="mb-4">
          <Input
            register={register}
            errors={errors}
            label="Body"
            type="text"
            inputName="body"
          />
        </div>
        <button
          onClick={handleSubmit((data: NewArticleFormData) =>
            onSubmit({ ...data, tagList: Array.from(selectedTags) }),
          )}
          className="w-full rounded-md bg-teal-600 py-2 font-semibold text-white transition hover:bg-teal-700"
        >
          Submit
        </button>
      </div>
    </div>
  )
}
