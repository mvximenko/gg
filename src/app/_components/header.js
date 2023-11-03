'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import IconSearch from '@/assets/icons/search.svg?react';

const Header = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (event.target[0].value) {
      router.push(`/search?q=${event.target[0].value}`);
      event.target.reset();
    }
  };

  return (
    <header className='absolute top-0 h-24 w-full'>
      <div className='container h-full mx-auto px-3 sm:px-10 flex items-center'>
        <Link href='/' className='font-bold text-4xl'>
          GG
        </Link>

        <form
          className='flex-grow max-w-lg ml-4 sm:px-8'
          onSubmit={handleSubmit}
        >
          <div className='flex items-center c-bg-dark-blue px-3 rounded-full justify-between'>
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
