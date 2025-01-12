export default function VinylIcon() {
  return (
    <div className="relative inline-block w-48 h-48">
      <div className="absolute inset-0 bg-white/5 rounded-full overflow-hidden group-hover:bg-white/10 transition-colors">
        <div className="absolute inset-4 border-2 border-white/20 rounded-full vinyl-spin"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center vinyl-label-spin">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-1 h-16 bg-white/20 transform -rotate-45 origin-center translate-x-8 group-hover:rotate-[20deg] transition-transform duration-300"></div>
      </div>
    </div>
  )
}

