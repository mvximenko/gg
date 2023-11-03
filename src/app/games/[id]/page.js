import Link from 'next/link';
import { redirect } from 'next/navigation';
import Rating from './_components/rating';
import Background from '@/app/_components/background';
import CustomImage from '@/app/_components/custom-image';
import Details from './_components/details';
import IconSearch from '@/assets/icons/search.svg?react';
import api from '@/api';

export default async function Home({ params }) {
  const game = await api.getGameById(+params.id);

  console.log('game', game);

  if (!game || !game?.[0]?.name) {
    redirect('/404');
  }

  const {
    name,
    cover,
    genres,
    aggregated_rating,
    summary,
    screenshots,
    similar_games,
    ...details
  } = game[0];

  return (
    <>
      <Background classes='blur-sm h-[450px]' gradientClass='game-gradient'>
        <CustomImage imageId={screenshots?.[0]?.image_id} noContainer />
      </Background>

      <div className='px-8 mb-20 mt-48 grid grid-cols-[0.25fr_1fr] gap-6'>
        <div>
          <div className='relative aspect-[3/4] rounded-xl c-bg-dark-blue'>
            <CustomImage altText='cover' imageId={cover?.image_id} />
          </div>

          <div className='flex flex-wrap mt-4 gap-2.5 text-slate-300'>
            {genres?.map((genre) => (
              <div
                className='grow rounded-xl text-center p-2 c-bg-tangaroa'
                key={genre.id}
              >
                {genre.name}
              </div>
            ))}

            <div className='font-bold flex items-center justify-center w-full rounded-xl p-3 c-bg-tangaroa'>
              <IconSearch className='mr-1' />
              More like this
            </div>
          </div>
        </div>

        <div>
          <h1 className='text-4xl font-bold'>{name}</h1>
          <Rating value={aggregated_rating} />
          <p className='mt-6 text-lg font-medium text-slate-300'>{summary}</p>

          <div className='mt-6 grid gap-2.5 grid-cols-[repeat(10, 1fr)] grid-rows-[repeat(2, 1fr)] min-h-[338px]'>
            {screenshots?.slice(0, 5).map((screenshot, index) => (
              <div
                className={
                  `screenshot-${index + 1} ` +
                  'c-bg-dark-blue relative rounded-xl'
                }
                key={screenshot.image_id}
              >
                <CustomImage
                  imageId={screenshot.image_id}
                  altText='Screenshot'
                  size='s-md'
                />
              </div>
            ))}
          </div>

          <Details {...details} />

          <h2 className='mt-10 text-2xl font-bold mb-2'>You Might Also Like</h2>

          <div className='mt-4 grid grid-rows-2 sm:grid-cols-6 gap-2'>
            {similar_games?.map((game) => (
              <Link
                className='relative aspect-[3/4] rounded-xl c-bg-dark-blue'
                key={game.id}
                href={`/games/${game.id}`}
              >
                <CustomImage {...game} altText='Cover' />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
