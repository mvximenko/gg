'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import IconSearch from '@/assets/icons/search.svg?react';

const Header = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target[0].value) {
      // TODO:
      // router.push(`/search?q=${event.target[0].value}`);
      router.push(`/games/${+event.target[0].value}`);
      event.target.reset();
    }
  };

  return (
    <header className='absolute h-24 w-full'>
      <div className='container h-full mx-auto px-8 flex items-center'>
        <Link href='/' className='font-bold text-4xl'>
          GG
        </Link>

        <form
          className='flex-grow max-w-lg px-4 sm:px-8'
          onSubmit={handleSubmit}
        >
          <div className='flex items-center c-bg-dark-blue px-3 rounded-full'>
            <input
              className='w-full p-2 font-medium bg-transparent'
              placeholder='Search'
              type='search'
            />

            <button className='p-2'>
              <IconSearch />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
