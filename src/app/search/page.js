import Link from 'next/link';
import CustomImage from '@/app/_components/custom-image';
import api from '@/api';

export default async function Search({ searchParams }) {
  const games = await api.search(searchParams.q);

  console.log('games', games);

  return (
    <div className='px-3 sm:px-10'>
      <h1 className='text-2xl font-bold'>Results for: {searchParams.q}</h1>

      {games.length ? (
        <div className='mt-4 grid grid-cols-3 md:grid-cols-6 gap-2 sm:gap-6'>
          {games.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <figure>
                <div className='relative aspect-[3/4] rounded-xl c-bg-dark-blue'>
                  <CustomImage {...game} />
                </div>

                <figcaption className='mt-2 text-xs	sm:text-lg font-bold text-center line-clamp-3'>
                  {game.name}
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      ) : (
        <h2 className='mt-4'>No games found</h2>
      )}
    </div>
  );
}
