import { useQuery } from '@tanstack/react-query'
import { Input } from '../components'
import { useCreateNewArticle, useAuthLogic } from '../hooks'
import MainLayout from '../layouts/MainLayout'
import { type NewArticleFormData, newArticleSchema } from '../utils/authSchemas'
import { getAllTags } from '../services/api'

export function NewArticle() {
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
  return (
    <MainLayout userName="username">
      <div className="flex flex-col gap-4 md:flex-row">
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
              onClick={handleSubmit(onSubmit)}
              className="w-full rounded-md bg-teal-600 py-2 font-semibold text-white transition hover:bg-teal-700"
            >
              Submit
            </button>
          </div>
        </div>
        <div id="tagList" className="rounded-lg bg-white p-4">
          <>
            <label className="mb-1 block text-sm font-medium">Tags</label>
            <input
              placeholder="New tag"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-teal-200 focus:outline-none"
            />
          </>
          <div className="mt-4 max-h-[320px] w-full overflow-y-auto rounded-lg border border-[#E6E6E6] p-4">
            {response?.data.tags.map((tag) => <p key={tag}>{tag}</p>)}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
