import Link from 'next/link';

interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className="bg-white/10 px-2 py-1 rounded-full text-sm hover:bg-white/20 transition-colors"
        >
          #{tag}
        </Link>
      ))}
    </div>
  );
}

