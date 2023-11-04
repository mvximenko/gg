import { Fragment } from 'react';
import Category from './category';

const Details = ({
  release_dates,
  websites,
  involved_companies,
  player_perspectives,
  game_modes,
  game_engines,
  themes,
}) => {
  const developers = involved_companies?.filter((company) => company.developer);
  const publishers = involved_companies?.filter((company) => company.publisher);

  const links = websites?.filter((website) =>
    [1, 3, 5, 6, 9, 14, 18].includes(website.category)
  );

  const stores = websites?.filter((website) =>
    [13, 16, 17].includes(website.category)
  );

  const releases = release_dates
    ? Array.from(
        release_dates
          .reduce(
            (m, o) => (!m.has(o.platform.id) ? m.set(o.platform.id, o) : m),
            new Map()
          )
          .values()
      )
    : [];

  return (
    <div className='mt-6 md:grid grid-cols-2 gap-5 xl:grid-cols-3 xl:gap-10 '>
      <div>
        <h2 className='text-lg font-bold mb-2'>Release Dates</h2>
        <div className='grid grid-cols-3 gap-1 mb-4 text-slate-300'>
          {releases.map((release) => (
            <Fragment key={release.key}>
              <span className='col-span-2'>{release.platform.name}</span>
              <span className='text-right'>{release.human}</span>
            </Fragment>
          ))}
        </div>

        <Category title='Developers' items={developers} path='company.name' />
        <Category title='Publishers' items={publishers} path='company.name' />
      </div>

      <div>
        <Category title='Game Modes' items={game_modes} />
        <Category title='Player Perspectives' items={player_perspectives} />
        <Category title='Themes' items={themes} />
        <Category title='Game Engine' items={game_engines} />
      </div>

      <div>
        <Category title='Links' items={links} external />
        <Category title='Stores' items={stores} external />
      </div>
    </div>
  );
};

export default Details;
