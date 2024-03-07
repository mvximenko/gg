import Link from 'next/link';
import CustomImage from '@/app/_components/custom-image';
import api from '@/api';

export default async function Search({ searchParams }) {
  const games = await api.search(searchParams);

  return (
    <div className='px-4 xl:px-40'>
      {games.length ? (
        <div className='mt-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-y-6 gap-x-2'>
          {games.map((game) => (
            <Link key={game.id} href={`/games/${game.id}`}>
              <figure>
                <div className='relative aspect-[3/4] rounded-xl c-bg-dark-blue transition md:hover:brightness-110'>
                  <CustomImage {...game} />
                </div>

                <figcaption className='mt-2.5 text-xs	sm:mt-3 sm:text-base font-bold text-center line-clamp-3'>
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
