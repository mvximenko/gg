'use client';

import Image from 'next/image';
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
      className={'object-cover rounded-xl ' + classes}
      unoptimized
      fill
    />
  );
};

export default CustomImage;
