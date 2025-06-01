export function TableHead() {
  return (
    <thead className="border-neutral-st3-default bg-neutral-bg2-default sticky top-0 h-12 border-b">
      <tr>
        <th className="p-2 text-left text-lg font-semibold">#</th>
        <th className="p-2 text-left text-lg font-semibold">Title</th>
        <th className="p-2 text-left text-lg font-semibold">Author</th>
        <th className="p-2 text-left text-lg font-semibold">Tags</th>
        <th className="p-2 text-left text-lg font-semibold">Excerpt</th>
        <th className="p-2 text-left text-lg font-semibold">Created</th>
        <th className="p-2 text-left text-lg font-semibold"></th>
      </tr>
    </thead>
  )
}
