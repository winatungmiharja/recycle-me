import * as React from 'react';

import { CraftSelection } from '@/store/CraftStore';
import useCraft from '@/store/CraftStore';
export default function TodoSection({ value }: { value: CraftSelection }) {
  const store = useCraft();
  const toggleDone = (id: number, status: boolean) => {
    store.updateCraftsTools(value.id, id, status);
  };

  const isAllDone = (value: CraftSelection): boolean => {
    const newData = value.tools.filter((item) => item.done === false);
    return newData.length > 0 ? false : true;
  };

  return (
    <div className='p-6 overflow-y-scroll text-white bg-gray-800 rounded-3xl'>
      <h3>Tools/Ingredients Needed</h3>

      {isAllDone(value) && <p>Complete! Lets make some crafts now!✨</p>}
      <div className='flex flex-col gap-4 mt-4 overflow-y-scroll'>
        {value.tools.map((item) => (
          <div key={item.id} className='flex justify-between'>
            <div>
              {' '}
              <p>{item.title}</p>
              <p> &#x25CF; qty : {item.qty}</p>
            </div>
            <label className='inline-flex items-center'>
              <input
                name={`${item.id}`}
                id={`${item.id}`}
                type='checkbox'
                className='form-checkbox'
                checked={item.done}
                onChange={() => toggleDone(item.id, item.done)}
              />
              <span className='ml-2'>Done</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
