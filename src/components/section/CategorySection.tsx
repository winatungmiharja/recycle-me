import * as React from 'react';

import CategoryCard from '@/components/card/CategoryCard';

export type CategoryType = {
  title: string;
  desc: string;
  progress: number;
  item: number;
  date: Date;
  img: string;
  theme: 'green' | 'red' | 'yellow' | 'blue' | 'purple' | 'gray';
};

const categoryCards: CategoryType[] = [
  {
    title: 'Paper',
    desc: 'Lorem ipsum',
    progress: 56,
    item: 3,
    date: new Date(),
    theme: 'green',
    img: '/images/trash-01.svg',
  },
  {
    title: 'Plastic',
    desc: 'Lorem ipsum',
    progress: 56,
    item: 3,
    date: new Date(),
    theme: 'red',
    img: '/images/trash-05.svg',
  },
  {
    title: 'Metal',
    desc: 'Lorem ipsum',
    progress: 56,
    item: 3,
    date: new Date(),
    theme: 'yellow',
    img: '/images/trash-02.svg',
  },
  {
    title: 'Trash',
    desc: 'Lorem ipsum',
    progress: 56,
    item: 3,
    date: new Date(),
    theme: 'blue',
    img: '/images/trash-03.svg',
  },
  {
    title: 'Glass',
    desc: 'Lorem ipsum',
    progress: 56,
    item: 3,
    date: new Date(),
    theme: 'purple',
    img: '/images/trash-04.svg',
  },
  {
    title: 'Metal',
    desc: 'Lorem ipsum',
    progress: 56,
    item: 3,
    date: new Date(),
    theme: 'gray',
    img: '/images/trash-05.svg',
  },
];

export default function CategorySection() {
  return (
    <div className='flex overflow-x-scroll rounded-lg overflow-scrollbar'>
      {categoryCards.map((item, i) => (
        <CategoryCard value={item} key={i} />
      ))}
    </div>
  );
}
