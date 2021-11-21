/* eslint-disable @next/next/link-passhref */
import clsx from 'clsx';
import Link from 'next/link';
import * as React from 'react';
import {
  FiArrowLeftCircle,
  FiArrowRightCircle,
  FiCornerLeftUp,
} from 'react-icons/fi';

import { CraftSelection, Step } from '@/store/CraftStore';

export default function StepSection({ value }: { value: CraftSelection }) {
  const [active, setActive] = React.useState(0);
  return (
    <div className='relative overflow-x-auto text-white bg-gray-800 rounded-3xl'>
      <div className='p-6 '>
        <h3>Instructions</h3>
      </div>
      <div className='absolute inset-0 z-0 grid grid-cols-1 gap-4 p-6 mt-16 mb-32 overflow-y-scroll sm:mb-16'>
        {value.step.map((item) => (
          <StepCardSection
            key={item.id}
            value={item}
            isActive={item.id === active}
          />
        ))}
      </div>
      <div className='absolute bottom-0 flex w-full h-32 px-6 py-2 sm:h-16'>
        <div className='flex flex-col items-start justify-center w-full gap-2 sm:justify-between sm:items-center sm:flex-row '>
          <div className='flex items-center gap-4 '>
            <div className='pr-4 border-r-2'>
              <p className='text-xs whitespace-nowrap '>Current Step</p>
              <p>{active + 1}</p>
            </div>
            <div>
              <p className='text-xs whitespace-nowrap '>Remaining Step</p>
              <p>
                {value.step.length - active === 0
                  ? 'Done✌'
                  : value.step.length - active - 1}
              </p>
            </div>
          </div>
          {active < value.step.length ? (
            <div className='flex w-full gap-4 '>
              <button
                className='inline-flex items-center justify-center gap-2 px-4 py-2 ml-auto text-sm font-medium text-white bg-purple-400 border border-transparent rounded-lg hover:bg-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                onClick={() => setActive(active + 1)}
              >
                <p className='whitespace-nowrap'>Next Step</p>
                <FiArrowRightCircle size={20} />
              </button>
              <button
                className='inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-400 border border-transparent rounded-lg hover:bg-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                onClick={() => setActive(active === 0 ? 0 : active - 1)}
              >
                <p className='whitespace-nowrap'>Previous Step</p>
                <FiCornerLeftUp size={20} />
              </button>
            </div>
          ) : (
            <button
              className='inline-flex items-center justify-center gap-2 px-4 py-2 ml-auto text-sm font-medium text-white bg-purple-400 border border-transparent rounded-lg hover:bg-purple-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
              onClick={() => setActive(active + 1)}
            >
              <Link href='/craft'>
                <span className='flex gap-2'>
                  Back to Craft✨ <FiArrowLeftCircle size={20} />
                </span>
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

const StepCardSection = ({
  value,
  isActive,
}: {
  value: Step;
  isActive: boolean;
}) => {
  const cardRef = React.useRef();
  React.useEffect(() => {
    if (isActive && cardRef && cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'start',
      });
    }
  }, [isActive]);
  return (
    <div ref={cardRef}>
      <p className='text-sm'>Step {value.id + 1}</p>
      <p
        className={clsx(
          'p-4  mt-1 rounded-xl text-sm',
          {
            'bg-blue-300 text-black': isActive,
          },
          {
            'bg-gray-900 text-white': !isActive,
          }
        )}
      >
        {value.step}
      </p>
    </div>
  );
};
