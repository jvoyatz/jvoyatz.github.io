import { getVinyls } from '../../lib/vinyls'

export default async function Vinyls() {
  const vinyls = await getVinyls()
  
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-12">My Vinyl Collection</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vinyls.map((vinyl) => (
            <div 
              key={vinyl.id} 
              className="group relative aspect-square bg-white/5 rounded-lg overflow-hidden hover:bg-white/10 transition-colors"
            >
              <img 
                src={vinyl.coverImage} 
                alt={`${vinyl.artist} - ${vinyl.album}`} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                <h2 className="text-lg font-bold">{vinyl.album}</h2>
                <p className="text-sm text-gray-300">{vinyl.artist}</p>
                <p className="text-xs text-gray-400 mt-1">{vinyl.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

