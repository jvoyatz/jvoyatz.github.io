interface Vinyl {
  id: string;
  artist: string;
  album: string;
  year: string;
  coverImage: string;
}

export async function getVinyls(): Promise<Vinyl[]> {
  // This is a mock implementation. Replace with actual data fetching logic.
  return [
    {
      id: '1',
      artist: 'Pink Floyd',
      album: 'Dark Side of the Moon',
      year: '1973',
      coverImage: '/images/vinyls/dark-side-of-the-moon.jpg'
    },
    {
      id: '2',
      artist: 'Daft Punk',
      album: 'Random Access Memories',
      year: '2013',
      coverImage: '/images/vinyls/random-access-memories.jpg'
    },
    // Add more vinyl records as needed
  ];
}

