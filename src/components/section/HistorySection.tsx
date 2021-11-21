/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import useTrash from '@/store/TrashStore';

import SectionText from '../Text/SectionText';

export default function HistorySection() {
  const store = useTrash();
  const history = store.history;
  console.log(history);
  return (
    <div className='pt-6 bg-gray-800 rounded-3xl'>
      <div className='px-6'>
        <SectionText title='History' />
      </div>
      {history.map((item, i) => (
        <div
          key={i}
          className='flex w-full p-4 px-6 border-t border-gray-700 solid 2xl:items-start hover:bg-gray-700/30'
        >
          <img
            src={item.img}
            alt='profile image'
            className='object-cover w-10 h-10 rounded-full'
          />
          <div className='w-full pl-4'>
            <div className='flex items-center justify-between w-full'>
              <div className='font-medium text-white'>{item.title}</div>
              <div className='flex items-center justify-center cursor-pointer h-7 w-7'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-white'
                >
                  <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
                </svg>
              </div>
            </div>
            <p className='my-2 text-sm text-white'>
              Category : {item.category}
            </p>
            <p className='text-sm text-right text-white'>{item.date}</p>
          </div>
        </div>
      ))}

      <img src='/images/history.svg' alt='' className='rounded-3xl' />
    </div>
  );
}
