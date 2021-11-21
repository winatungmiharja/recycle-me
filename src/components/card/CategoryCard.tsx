/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';

import { CategoryType } from '@/store/TrashStore';

export default function CategoryCard({ value }: { value: CategoryType }) {
  return (
    <div className='w-full text-white' style={{ minWidth: '16em' }}>
      <div className='p-2'>
        <img className='w-full' src={value.img} alt='participant' />
        <div className={clsx('p-4 rounded-3xl', 'bg-gray-900')}>
          <div className='mt-5 mb-4 text-center'>
            <h3>{value.title}</h3>
            <p className='mt-2 text-sm '>{value.desc}</p>
          </div>
          <div>
            <p className='m-0 text-sm font-bold'>Progress</p>
            <div className='w-full h-1 mx-0 my-2 overflow-hidden bg-white rounded-md'>
              <span
                style={{ width: `${value.progress}%` }}
                className={clsx('block  h-1 rounded-md bg-purple-700')}
              />
            </div>
            <p className='m-0 text-sm font-bold text-right'>{value.progress}</p>
          </div>
          <div className='relative flex justify-between pt-4'>
            <div className='flex items-center'>
              <img
                className='object-cover w-5 h-5 overflow-hidden rounded-full'
                src='https://cf.shopee.co.id/file/fc7fff194651797bc01d1d586a1933f4'
                alt='participant'
              />
              <img
                className='object-cover w-5 h-5 overflow-hidden rounded-full'
                src='https://cf.shopee.co.id/file/fc7fff194651797bc01d1d586a1933f4'
                alt='participant'
              />
            </div>
            <div
              className={clsx(
                'flex flex-shrink-0 px-4 py-2 text-sm font-bold rounded-lg'
              )}
            >
              {value.item} Item
            </div>
          </div>
          <p className='flex items-center w-full gap-2 ml-auto text-sm '>
            reward : {value.reward}{' '}
            <img src='/images/coin.svg' alt='coin' className='w-6' />
          </p>
        </div>
      </div>
    </div>
  );
}
