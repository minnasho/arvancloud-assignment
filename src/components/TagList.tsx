import { Checkbox } from "./Checkbox"

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
    <div id="tagList" className="rounded-lg bg-white p-4">
      <label className="mb-1 block text-sm font-medium">Tags</label>
      <input
        placeholder="New tag"
        value={newTagInput}
        onChange={(e) => setNewTagInput(e.target.value)}
        onKeyDown={handleNewTagKeyDown}
        className="w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-teal-200 focus:outline-none"
      />

      <div className="mt-4 max-h-[320px] w-full max-w-80 overflow-x-hidden overflow-y-auto rounded-lg border border-[#E6E6E6] p-4">
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
