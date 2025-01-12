import Link from 'next/link'
import { getAllTags } from '../../lib/posts'

export default async function TagsPage() {
  const tags = await getAllTags()

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">All Tags</h1>
        <div className="flex flex-wrap gap-4">
          {tags.map(tag => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="bg-white/10 px-4 py-2 rounded-full text-lg hover:bg-white/20 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

