import { Fragment } from 'react';
import IconStarFull from '@/assets/icons/star-full.svg?react';
import IconStarHalf from '@/assets/icons/star-half.svg?react';
import IconStarOutline from '@/assets/icons/star-outline.svg?react';

const StarRating = ({ rating }) => (
  <div className='flex'>
    {new Array(5).fill(0).map((_, i) => (
      <Fragment key={i}>
        {rating - i > 0.5 ? (
          <IconStarFull />
        ) : rating - i > 0 ? (
          <IconStarHalf />
        ) : (
          <IconStarOutline />
        )}
      </Fragment>
    ))}
  </div>
);

const Rating = ({ value }) => {
  const stars = Math.round(value / 20 / 0.5) * 0.5;
  const number = value ? Math.round((value / 20) * 10) / 10 : 'N/A';

  return (
    <div className='stars flex items-center	mt-2'>
      <StarRating rating={stars} />

      <span className='ml-2 font-bold text-2xl leading-6'>{number}</span>
    </div>
  );
};

export default Rating;
