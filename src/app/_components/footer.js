import Link from 'next/link';
import Github from '@/assets/icons/github.svg?react';

const Footer = () => {
  return (
    <footer className='h-16 c-bg-dark-blue mt-8 flex items-center justify-center'>
      <Link
        href='https://github.com/mvximenko/gg'
        rel='noopener noreferrer'
        target='_blank'
      >
        <Github />
      </Link>
    </footer>
  );
};

export default Footer;
