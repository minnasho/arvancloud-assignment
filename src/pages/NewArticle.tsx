import { ArticleForm, TagList } from '../components'
import { useNewArticleLogic } from '../hooks'
import MainLayout from '../layouts/MainLayout'

export function NewArticle() {
  const {
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
    article,
    editMode,
  } = useNewArticleLogic()

  return (
    <MainLayout userName="username">
      <div className="flex flex-col gap-4 md:flex-row">
        <ArticleForm
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          selectedTags={selectedTags}
          article={article}
          editMode={editMode}
        />
        <TagList
          allTags={allTags}
          selectedTags={selectedTags}
          toggleTag={toggleTag}
          handleNewTagKeyDown={handleNewTagKeyDown}
          newTagInput={newTagInput}
          setNewTagInput={setNewTagInput}
        />
      </div>
    </MainLayout>
  )
}
