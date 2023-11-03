import { redirect } from 'next/navigation';
import Rating from './_components/rating';
import Background from '@/app/_components/background';
import CustomImage from '@/app/_components/custom-image';
import api from '@/api';

export default async function Home({ params }) {
  const game = await api.getGameById(+params.id);

  if (!game || !game?.[0]?.name) {
    redirect('/404');
  }

  const { name, aggregated_rating, screenshots } = game[0];

  return (
    <>
      <Background classes='blur-sm h-[450px]' gradientClass='game-gradient'>
        <CustomImage imageId={screenshots?.[0]?.image_id} noContainer />
      </Background>

      <h1 className='text-4xl font-bold'>{name}</h1>

      <Rating value={aggregated_rating} />
    </>
  );
}
