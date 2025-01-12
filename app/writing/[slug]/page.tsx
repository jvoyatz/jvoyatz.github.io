import { getPostBySlug } from '../../../lib/posts'
import { notFound } from 'next/navigation'
import TagList from '../../components/TagList'

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4">
      <article className="max-w-2xl mx-auto">
        <header className="mb-8">
          <time className="text-sm text-gray-400">{post.date}</time>
          <h1 className="text-3xl font-bold mt-2 mb-4">{post.title}</h1>
          <TagList tags={post.tags} />
        </header>
        <div 
          className="prose prose-invert prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  )
}

