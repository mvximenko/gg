import resolve from '@/utils/resolve';
import IconLink from '@/assets/icons/link.svg?react';
import IconSteam from '@/assets/icons/steam.svg?react';
import IconReddit from '@/assets/icons/reddit.svg?react';
import IconTwitch from '@/assets/icons/twitch.svg?react';
import IconWiki from '@/assets/icons/wiki.svg?react';
import IconGOG from '@/assets/icons/gog.svg?react';
import IconEpic from '@/assets/icons/epic.svg?react';
import IconDiscord from '@/assets/icons/discord.svg?react';
import IconYoutube from '@/assets/icons/youtube.svg?react';
import IconTwitter from '@/assets/icons/twitter.svg?react';

const iconTypes = {
  1: { icon: IconLink, title: 'Official' },
  // 2: { icon: IconLink, title: 'Wikia' },
  3: { icon: IconWiki, title: 'Wikipedia' },
  // 4: { icon: IconLink, title: 'Facebook' },
  5: { icon: IconTwitter, title: 'Twitter' },
  6: { icon: IconTwitch, title: 'Twitch' },
  // 8: { icon: IconLink, title: 'Instagram' },
  9: { icon: IconYoutube, title: 'YouTube' },
  13: { icon: IconSteam, title: 'Steam' },
  14: { icon: IconReddit, title: 'Reddit' },
  16: { icon: IconEpic, title: 'Epic Games' },
  17: { icon: IconGOG, title: 'GOG' },
  18: { icon: IconDiscord, title: 'Discord' },
};

const IconWithText = ({ id, ...props }) => {
  const IconComponent = iconTypes[id].icon;
  return (
    <>
      <IconComponent {...props} />
      {iconTypes[id].title}
    </>
  );
};

const Category = ({ title, items, path, external }) =>
  !!items?.length && (
    <>
      <h2 className='text-lg font-bold mb-2'>{title}</h2>
      <div className='flex flex-wrap gap-2 mb-4 text-slate-300'>
        {items.map((item) => (
          <button
            className='flex gap-1 items-center c-bg-tangaroa py-1 px-2 rounded-xl'
            key={item.id}
          >
            {external ? (
              <IconWithText id={item.category} />
            ) : (
              item.name ?? resolve(item, path)
            )}
          </button>
        ))}
      </div>
    </>
  );

export default Category;
