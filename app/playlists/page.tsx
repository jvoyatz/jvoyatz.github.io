import { getPlaylists } from '../../lib/playlists'

export default async function Playlists() {
  const playlists = await getPlaylists()
  
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-12">Playlists</h1>
        <div className="grid gap-6">
          {playlists.map((playlist) => (
            <div 
              key={playlist.id} 
              className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              <iframe
                src={`https://open.spotify.com/embed/playlist/${playlist.id}`}
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-md"
              />
              <h2 className="text-lg font-bold mt-4 mb-2">{playlist.title}</h2>
              <p className="text-gray-400 text-sm">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

