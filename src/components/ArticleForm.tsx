import type { IArticle } from '../services/types'
import type { NewArticleFormData } from '../utils/formSchemas'
import { Button } from './Button'
import { Input } from './Input'
import { Textarea } from './Textarea'

interface IArticleFormProps {
  register: any
  errors: any
  handleSubmit: any
  onSubmit: any
  selectedTags: Set<string>
  editMode?: boolean
  article?: IArticle
  isLoading?: boolean
}

export function ArticleForm({
  register,
  errors,
  handleSubmit,
  onSubmit,
  selectedTags,
  isLoading = false,
}: IArticleFormProps) {
  return (
    <div
      id="articleForm"
      className="bg-neutral-bg1-default flex-2/3 rounded-lg"
    >
      <div id="header" className="flex h-[100px] min-h-24 items-center p-6">
        <h2 className="text-lg font-semibold">New Article</h2>
      </div>
      <div id="form" className="border-neutral-st3-default border-t p-6">
        <Input
          register={register}
          errors={errors}
          label="Title"
          type="text"
          inputName="title"
        />
        <Input
          register={register}
          errors={errors}
          label="Description"
          type="text"
          inputName="description"
        />
        <Textarea
          register={register}
          errors={errors}
          label="Body"
          inputName="body"
        />
        <div className="w-20">
          <Button
            onClick={handleSubmit((data: NewArticleFormData) =>
              onSubmit({ ...data, tagList: Array.from(selectedTags) }),
            )}
            title={'Submit'}
            btnType={'primary'}
            role={'submit'}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  )
}
