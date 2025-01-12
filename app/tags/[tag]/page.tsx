import Link from 'next/link'
import { getPostsByTag } from '../../../lib/posts'
import TagList from '../../components/TagList'

export default async function TagPage({ params }: { params: { tag: string } }) {
  const posts = await getPostsByTag(params.tag)

  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Posts tagged with #{params.tag}</h1>
        <div className="space-y-12">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <Link href={`/writing/${post.slug}`}>
                <div className="mb-4">
                  <time className="text-sm text-gray-400">{post.date}</time>
                </div>
                <h2 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
              </Link>
              <TagList tags={post.tags} />
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

