import Background from './_components/background';
import CustomImage from './_components/custom-image';
import Link from 'next/link';
import api from '@/api';

export default async function Home() {
  const games = await api.getGamesByRating();

  if (!games || !games?.[0]?.name) {
    redirect('/404');
  }

  return (
    <>
      <Background
        classes='h-[100vh] xl:h-auto aspect-[18/9]'
        gradientClass='home-gradient'
      >
        <CustomImage source='/hero.avif' classes='object-[85%]' />
      </Background>

      <div className='mt-32 px-4 xl:px-40'>
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

        <div className='mt-5 grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 grid-rows-2 sm:auto-rows-[0]	overflow-hidden gap-2'>
          {games.map((game) => (
            <Link
              key={game.id}
              href={`/games/${game.id}`}
              className='relative aspect-[3/4] rounded-xl c-bg-dark-blue'
            >
              <CustomImage {...game} altText='Cover' />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
