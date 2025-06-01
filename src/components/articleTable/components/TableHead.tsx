const headerTitles = ['#', 'Title', 'Author', 'Tags', 'Excerpt', 'Created', '']
export function TableHead() {
  return (
    <thead className="border-neutral-st3-default bg-neutral-bg2-default sticky top-0 h-12 border-b">
      <tr>
        {headerTitles.map((title, idx) => (
          <th key={idx} className="px-3 py-2 text-left text-lg font-semibold">
            {title}
          </th>
        ))}
      </tr>
    </thead>
  )
}
