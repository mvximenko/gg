'use client';

import Image from 'next/image';
import useImageOnLoad from '@/hooks/useImageOnLoad';
import { IMAGE_API, SCREENSHOT_MED } from '@/config';

const Background = ({
  src,
  classNames,
  gradientClass,
  imgClassNames = '',
  imageId,
}) => {
  const { handleImageOnLoad, css } = useImageOnLoad();

  return (
    <div className={'absolute top-0 -z-10 container ' + classNames}>
      <Image
        alt='Background'
        src={src ?? `${IMAGE_API}/${SCREENSHOT_MED}/${imageId}.png`}
        className={'object-cover ' + imgClassNames}
        onLoad={handleImageOnLoad}
        style={{ ...css.fade }}
        unoptimized
        fill
      />

      <div className={`absolute w-full h-full ${gradientClass}`} />
    </div>
  );
};

export default Background;
