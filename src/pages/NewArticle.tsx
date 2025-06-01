import { ArticleForm, LoadingSpinner, TagList } from '../components'
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
    isUpdateArticleLoading,
    isNewArticleLoading,
  } = useNewArticleLogic()

  return (
    <MainLayout userName="username">
      {editMode && !article ? (
        <LoadingSpinner
          className="mx-auto mt-64"
          size={100}
          color="border-4 border-primary-bg2-default"
        />
      ) : (
        <div className="flex flex-col gap-4 md:flex-row">
          <ArticleForm
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            selectedTags={selectedTags}
            article={article}
            editMode={editMode}
            isLoading={isUpdateArticleLoading || isNewArticleLoading}
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
      )}
    </MainLayout>
  )
}
