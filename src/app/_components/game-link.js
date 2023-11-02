'use client';

import Link from 'next/link';
import Image from 'next/image';
import useImageOnLoad from '@/hooks/useImageOnLoad';
import { IMAGE_API, COVER_BIG } from '@/config';

const GameLink = ({ id, name, cover }) => {
  const { handleImageOnLoad, css } = useImageOnLoad();

  return (
    <Link
      className='relative aspect-[3/4] rounded-xl c-bg-dark-blue'
      href={`/games/${id}`}
    >
      <Image
        alt={`${name} cover`}
        src={`${IMAGE_API}/${COVER_BIG}/${cover?.image_id}.png`}
        onLoad={handleImageOnLoad}
        style={{ ...css.fade }}
        className='rounded-xl'
        unoptimized
        fill
      />
    </Link>
  );
};

export default GameLink;
