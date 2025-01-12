import Link from 'next/link'
import VinylIcon from './components/VinylIcon'

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <section className="max-w-2xl mx-auto py-20">
        <h1 className="text-4xl font-bold mb-8">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-gray-400 text-lg mb-6">
          I write about <span className="bg-white/10 px-2">technology</span>, 
          share <span className="bg-white/10 px-2">music playlists</span> that fuel my coding sessions,
          and collect <span className="bg-white/10 px-2">vinyl records</span>.
        </p>
        <div className="mt-12">
          <Link href="/vinyls" className="inline-block group">
            <VinylIcon />
            <span className="block mt-4 text-center group-hover:text-gray-300 transition-colors">Explore my vinyl collection</span>
          </Link>
        </div>
      </section>
    </div>
  )
}

