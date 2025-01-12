export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

const posts: Post[] = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'Getting Started with Next.js',
    date: '2023-05-15',
    excerpt: 'Learn how to build a blog with Next.js and React',
    content: '<p>Next.js is a powerful framework for building React applications...</p>',
    tags: ['nextjs', 'react', 'webdev']
  },
  {
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript',
    date: '2023-06-01',
    excerpt: 'Improve your JavaScript projects with TypeScript',
    content: '<p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript...</p>',
    tags: ['typescript', 'javascript', 'webdev']
  },
  {
    slug: 'vinyl-collecting-101',
    title: 'Vinyl Collecting 101',
    date: '2023-06-15',
    excerpt: 'A beginner\'s guide to starting your vinyl collection',
    content: '<p>Collecting vinyl records can be a rewarding hobby. Here\'s how to get started...</p>',
    tags: ['vinyl', 'music', 'collecting']
  },
  {
    slug: 'hello-world',
    title: 'Hello, World!',
    date: '2023-01-01',
    excerpt: 'This is my first blog post.',
    content: '<p>Hello, World! This is the content of my first blog post.</p>',
    tags: ['introduction', 'blog']
  },
  // Add more posts as needed
];

export async function getAllPosts(): Promise<Post[]> {
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  return posts.find(post => post.slug === slug);
}

export async function getPostsByTag(tag: string): Promise<Post[]> {
  return posts.filter(post => post.tags.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
  const tags = posts.flatMap(post => post.tags);
  return Array.from(new Set(tags));
}

