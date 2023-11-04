import Link from 'next/link';
import { redirect } from 'next/navigation';
import Rating from './_components/rating';
import Background from '@/app/_components/background';
import CustomImage from '@/app/_components/custom-image';
import Details from './_components/details';
import api from '@/api';

export default async function Home({ params }) {
  const game = await api.getGameById(params.id);

  if (!game?.[0]?.name) {
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
        <CustomImage imageId={screenshots?.[0]?.image_id} />
      </Background>

      <div className='px-4 xl:px-40 xl:mb-20 mt-4 xl:mt-24'>
        <div className='md:grid grid-cols-[0.4fr_1fr] lg:grid-cols-[0.25fr_1fr] gap-6'>
          <div className='w-2/5 mx-auto md:m-0 md:w-full relative aspect-[3/4] rounded-xl c-bg-dark-blue'>
            <CustomImage
              name={name}
              altText='Cover'
              imageId={cover?.image_id}
            />
          </div>

          <div className='text-slate-300'>
            <h1 className='text-2xl mt-8 md:m-0 xl:text-4xl font-bold'>
              {name}
            </h1>
            <Rating value={aggregated_rating} />
            <p className='mt-6 text-base xl:text-lg font-medium '>{summary}</p>

            <div className='flex flex-wrap mt-4 md:mt-6 gap-2.5'>
              {genres?.map((genre) => (
                <Link
                  href={`/search?genres=${genre.id}`}
                  className='grow md:grow-0 rounded-xl text-center p-2 c-bg-tangaroa transition-colors md:hover:text-slate-100'
                  key={genre.id}
                >
                  {genre.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {!!screenshots?.length && (
          <div className='mt-6 grid gap-1.5 md:gap-2.5 grid-cols-[repeat(2, 1fr)] aspect-[2/1] lg:aspect-auto lg:min-h-[380px]'>
            {screenshots.slice(0, 5).map((screenshot, index) => (
              <div
                className={
                  `screenshot-${index + 1} ` +
                  'c-bg-dark-blue relative rounded-lg md:rounded-xl'
                }
                key={screenshot.image_id}
              >
                <CustomImage
                  name={name}
                  altText='Screenshot'
                  imageId={screenshot.image_id}
                  size='s-md'
                  classes='rounded-lg md:rounded-xl'
                />
              </div>
            ))}
          </div>
        )}

        <Details {...details} />

        <h2 className='mt-10 text-2xl font-bold mb-2'>You Might Also Like</h2>

        <div className='mt-3 md:mt-5 grid grid-cols-3 sm:grid-cols-5 grid-rows-3 sm:grid-rows-2 auto-rows-[0]	overflow-hidden gap-2'>
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
    </>
  );
}
