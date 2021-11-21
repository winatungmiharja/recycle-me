import * as React from 'react';

import CategoryCard from '@/components/card/CategoryCard';

import useTrash from '@/store/TrashStore';

export default function CategorySection() {
  const store = useTrash();
  const category = store.trash;
  return (
    <div className='flex overflow-x-scroll rounded-lg overflow-scrollbar'>
      {category.map((item, i) => (
        <CategoryCard value={item} key={i} />
      ))}
    </div>
  );
}
