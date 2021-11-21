import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import * as React from 'react';

import BaseInput from './BaseInput';

export interface Selection {
  id: number;
  name: string;
  value: string | number;
  desc: React.ReactNode;
  img: string;
  coin: number;
}

enum TabList {
  base,
  tree,
}
type TabListType = keyof typeof TabList;

type SelectionType = Record<TabListType, Array<Selection>>;

const categories: SelectionType = {
  base: [
    {
      id: 0,
      name: 'Default',
      value: 'default',
      desc: 'beautifull green grass',
      img: '/images/isometric-base-default.svg',
      coin: 100,
    },
    {
      id: 1,
      name: 'Grass',
      value: 'grass',
      desc: 'Green grass',
      img: '/images/isometric-base-grass.svg',
      coin: 280,
    },
    {
      id: 2,
      name: 'Stone',
      value: 'stone',
      desc: 'Rocky stone',
      img: '/images/isometric-base-stone.svg',
      coin: 280,
    },
    {
      id: 3,
      name: 'Water',
      value: 'water',
      desc: 'Splash Water',
      img: '/images/isometric-base-water.svg',
      coin: 280,
    },
  ],
  tree: [
    {
      id: 0,
      name: 'Default',
      value: 0,
      desc: 'No tree yet:(',
      img: '/images/isometric-tree-0.svg',
      coin: 0,
    },
    {
      id: 1,
      name: 'Original',
      value: 1,
      desc: 'Beautiful Tree',
      img: '/images/isometric-tree-1.svg',
      coin: 150,
    },
    {
      id: 2,
      name: 'Pinus',
      value: 2,
      desc: 'Beautiful Tree',
      img: '/images/isometric-tree-2.svg',
      coin: 180,
    },
    {
      id: 3,
      name: 'Bubble',
      value: 3,
      desc: 'Bubbly Tree',
      img: '/images/isometric-tree-3.svg',
      coin: 200,
    },
    {
      id: 4,
      name: 'Rectangly',
      value: 4,
      desc: 'Beautiful Tree',
      img: '/images/isometric-tree-4.svg',
      coin: 200,
    },
    {
      id: 5,
      name: 'Cupky',
      value: 5,
      desc: 'Delicious Tree',
      img: '/images/isometric-tree-5.svg',
      coin: 220,
    },
    {
      id: 6,
      name: 'Queen',
      value: 6,
      desc: 'Heart Tree',
      img: '/images/isometric-tree-6.svg',
      coin: 220,
    },
    {
      id: 7,
      name: 'Sign Board',
      value: 7,
      desc: 'Mark your forest👀',
      img: '/images/isometric-tree-7.svg',
      coin: 250,
    },
    {
      id: 8,
      name: 'Mushroom',
      value: 8,
      desc: 'Hipnotise your forest✨',
      img: '/images/isometric-tree-8.svg',
      coin: 250,
    },
  ],
};
export default function TreeInputSection() {
  return (
    <div className='w-full sm:px-0'>
      <Tab.Group>
        <Tab.List className='flex p-1 space-x-1 bg-blue-900/20 rounded-2xl'>
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                clsx(
                  'w-full py-2.5 text-sm leading-5 font-medium text-green-500 rounded-xl',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-200 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {(Object.keys(categories) as Array<TabListType>).map(
            (category, idx) => (
              <Tab.Panel
                key={idx}
                className={clsx(
                  'bg-gray-800 rounded-3xl p-3 max-h-72 overflow-y-auto',
                  'focus:outline-none   '
                )}
              >
                <ul>
                  <li>
                    <BaseInput
                      selections={categories[category]}
                      category={category}
                    />
                  </li>
                </ul>
              </Tab.Panel>
            )
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
