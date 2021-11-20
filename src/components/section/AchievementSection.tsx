import * as React from 'react';

export default function AchievementSection() {
  return (
    <div className='flex flex-wrap items-center justify-between pb-8'>
      <div className='flex flex-wrap text-white'>
        <div className='pr-10'>
          <div className='text-2xl font-bold'>45</div>
          <div className=''>In Progress</div>
        </div>
        <div className='pr-10'>
          <div className='text-2xl font-bold'>24</div>
          <div className=''>Done</div>
        </div>
        <div>
          <div className='text-2xl font-bold'>62</div>
          <div className=''>Total Projects</div>
        </div>
      </div>
      <div className='flex items-center mt-4 md:mt-0'>
        <button className='text-white bg-transparent' title='List View'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <line x1='8' y1='6' x2='21' y2='6' />
            <line x1='8' y1='12' x2='21' y2='12' />
            <line x1='8' y1='18' x2='21' y2='18' />
            <line x1='3' y1='6' x2='3.01' y2='6' />
            <line x1='3' y1='12' x2='3.01' y2='12' />
            <line x1='3' y1='18' x2='3.01' y2='18' />
          </svg>
        </button>
        <button className='p-2 ml-2 text-white bg-gray-700' title='Grid View'>
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
          >
            <rect x='3' y='3' width='7' height='7' />
            <rect x='14' y='3' width='7' height='7' />
            <rect x='14' y='14' width='7' height='7' />
            <rect x='3' y='14' width='7' height='7' />
          </svg>
        </button>
      </div>
    </div>
  );
}
