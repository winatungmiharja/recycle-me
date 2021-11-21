import * as React from 'react';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { HiOutlineDotsVertical } from 'react-icons/hi';

import { CraftSelection } from '@/store/CraftStore';

const tags = ['craft', 'reuse'];

export default function InfoSection({ value }: { value: CraftSelection }) {
  return (
    <div className='relative overflow-hidden text-white bg-gray-800 rounded-3xl'>
      <div className='absolute bottom-0 z-10 p-6 mx-6 duration-200 translate-y-1/2 backdrop-filter backdrop-blur rounded-3xl hover:translate-y-0 bg-white/20'>
        <div className='relative'>
          <HiOutlineDotsVertical className='absolute top-0 right-0' />
          <h3>{value.title}</h3>

          <div className='flex justify-start w-full gap-2 mt-1'>
            {tags.map((tag, i) => (
              <div
                key={i}
                className='px-2 py-1 text-sm font-semibold text-purple-800 bg-purple-300 rounded-full'
              >
                <p>{tag}</p>
              </div>
            ))}
            <div className='flex items-center gap-2 ml-auto'>
              <p>Reward : </p>
              <p className='font-semibold'>{value.coin} </p>
              <img src='/images/coin.svg' alt='coin' className='w-6' />
            </div>
          </div>
          <p className='flex items-center gap-2 mt-3'>
            <AiOutlinePaperClip />
            Description :{' '}
          </p>
          <p className='mt-2 text-sm'>{value.desc}</p>
        </div>
      </div>
      <div className='absolute inset-0 z-0 '>
        <img src={value.img} alt='' className='w-full' />
      </div>
    </div>
  );
}
