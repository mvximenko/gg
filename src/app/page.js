import Link from 'next/link';
import Background from './_components/background';
import api from '@/api';
import { IMAGE_API, COVER_BIG } from '@/config';

export default async function Home() {
  const games = await api.getGamesByRating();

  if (!games || !games[0].name) {
    redirect('/404');
  }

  return (
    <main className='container mx-auto'>
      <Background
        src='/hero.avif'
        classNames='h-[100vh] sm:h-auto aspect-[18/9]'
        imgClassNames='object-[85%]'
        gradientClass='home-gradient'
      />

      <div className='mt-56 px-4 sm:px-8'>
        <h1 className='text-5xl sm:text-6xl mt-8 sm:pt-8 font-bold c-text-shadow'>
          Not sure what
          <br />
          to play next?
        </h1>

        <p className='text-2xl sm:text-4xl mt-8 sm:pt-4 font-bold c-text-shadow'>
          Don't worry, we've got you covered.
        </p>

        <h2 className='text-3xl mt-48 font-bold text-center c-text-shadow'>
          Top Rated Games
        </h2>

        <div className='mt-5 grid grid-cols-3 grid-rows-2 sm:grid-cols-6 gap-2'>
          {games.map((game) => (
            <Link
              key={game.id}
              className='aspect-[3/4]'
              href={`/games/${game.id}`}
            >
              <img
                alt={`${game.name} cover`}
                src={`${IMAGE_API}/${COVER_BIG}/${game?.cover?.image_id}.png`}
                className='rounded-xl'
                loading='lazy'
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
