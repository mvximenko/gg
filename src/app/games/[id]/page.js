import { redirect } from 'next/navigation';
import Background from '@/app/_components/background';
import CustomImage from '@/app/_components/custom-image';
import IconSearch from '@/assets/icons/search.svg?react';
import api from '@/api';

export default async function Home({ params }) {
  const game = await api.getGameById(+params.id);

  if (!game || !game?.[0]?.name) {
    redirect('/404');
  }

  const { cover, genres, screenshots } = game[0];

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

          <div className='flex flex-wrap mt-4 gap-2.5 xyz'>
            {genres?.map((genre) => (
              <div className='grow rounded-xl text-center p-2' key={genre.id}>
                {genre.name}
              </div>
            ))}

            <div className='font-bold flex items-center justify-center w-full rounded-xl p-3'>
              <IconSearch className='mr-1' />
              More like this
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
