'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import useImageOnLoad from '@/hooks/useImageOnLoad';
import { IMAGE_API, IMAGE_SIZES } from '@/config';

const CustomImage = ({
  name,
  imageId,
  altText,
  size = 'c-big',
  cover,
  source,
  classes = '',
  ...props
}) => {
  const { handleImageOnLoad, css } = useImageOnLoad();

  return (
    <Image
      alt={altText ? `${name} ${altText}` : ''}
      src={
        source ??
        `${IMAGE_API}/${IMAGE_SIZES[size]}/${imageId ?? cover?.image_id}.png`
      }
      onLoad={handleImageOnLoad}
      style={{ ...css.fade }}
      className={twMerge('object-cover rounded-xl', classes)}
      unoptimized
      fill
      {...props}
    />
  );
};

export default CustomImage;
