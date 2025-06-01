import { Checkbox } from './Checkbox'
import { Input } from './Input'

interface ITagListProps {
  selectedTags: Set<string>
  toggleTag: (tag: string) => void
  allTags: string[]
  handleNewTagKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  newTagInput: string
  setNewTagInput: React.Dispatch<React.SetStateAction<string>>
}

export function TagList({
  selectedTags,
  toggleTag,
  allTags,
  handleNewTagKeyDown,
  newTagInput,
  setNewTagInput,
}: ITagListProps) {
  return (
    <div id="tagList" className="flex-1/3 rounded-lg bg-white p-4">
      <Input
        label="Tags"
        placeholder="New tag"
        value={newTagInput}
        onChange={(e) => setNewTagInput(e.target.value)}
        onKeyDown={handleNewTagKeyDown}
        type="text"
        inputName="tags"
      />

      <div className="border-neutral-st3-default mt-4 h-[320px] w-full overflow-x-hidden overflow-y-auto rounded-lg border p-4 md:h-96">
        {allTags.map((tag) => (
          <Checkbox
            key={tag}
            label={tag}
            checked={selectedTags.has(tag)}
            onChange={() => toggleTag(tag)}
            className="mb-2"
          />
        ))}
      </div>
    </div>
  )
}
