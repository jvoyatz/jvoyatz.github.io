import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg hover:text-gray-300 transition-colors">
            your-name
          </Link>
          <div className="flex gap-8">
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              about
            </Link>
            <Link href="/writing" className="hover:text-gray-300 transition-colors">
              writing
            </Link>
            <Link href="/playlists" className="hover:text-gray-300 transition-colors">
              playlists
            </Link>
            <Link href="/vinyls" className="hover:text-gray-300 transition-colors">
              vinyls
            </Link>
            <Link href="/tags" className="hover:text-gray-300 transition-colors">
              tags
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

