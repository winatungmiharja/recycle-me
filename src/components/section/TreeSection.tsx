/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import * as React from 'react';

import useTree from '@/store/TreeStore';

export default function TreeSection() {
  const store = useTree();
  const selection = store.trees;
  const currentTree = store.selectedTree;
  return (
    <div className='relative flex items-center justify-center text-white layout'>
      <div className='absolute top-40'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={`/images/isometric-base-${selection[0].base}.svg`}
            alt=''
            className={clsx('-mb-16 w-52', {
              'animate-custom-bounce': currentTree === 0,
            })}
          />
          <div className='flex flex-row gap-2 -mb-16'>
            <img
              src={`/images/isometric-base-${selection[1].base}.svg`}
              alt=''
              className={clsx('w-52', {
                'animate-custom-bounce': currentTree === 1,
              })}
            />
            <img
              src={`/images/isometric-base-${selection[2].base}.svg`}
              alt=''
              className={clsx('w-52', {
                'animate-custom-bounce': currentTree === 2,
              })}
            />
          </div>
          <div className='flex flex-row gap-2 -mb-16'>
            <img
              src={`/images/isometric-base-${selection[3].base}.svg`}
              alt=''
              className={clsx('w-52', {
                'animate-custom-bounce': currentTree === 3,
              })}
            />
            <img
              src={`/images/isometric-base-${selection[4].base}.svg`}
              alt=''
              className={clsx('w-52', {
                'animate-custom-bounce': currentTree === 4,
              })}
            />
            <img
              src={`/images/isometric-base-${selection[5].base}.svg`}
              alt=''
              className={clsx('w-52', {
                'animate-custom-bounce': currentTree === 5,
              })}
            />
          </div>
          <div className='flex flex-row gap-2 -mb-16'>
            <img
              src={`/images/isometric-base-${selection[6].base}.svg`}
              alt=''
              className={clsx('w-52', {
                'animate-custom-bounce': currentTree === 6,
              })}
            />
            <img
              src={`/images/isometric-base-${selection[7].base}.svg`}
              alt=''
              className={clsx('w-52', {
                'animate-custom-bounce': currentTree === 7,
              })}
            />
          </div>
          <img
            src={`/images/isometric-base-${selection[8].base}.svg`}
            alt=''
            className={clsx('relative w-52', {
              'animate-custom-bounce': currentTree === 8,
            })}
          />
        </div>
      </div>
      {/* TRESS */}
      <div className='absolute top-0'>
        <div className='flex flex-col items-center justify-center'>
          <img
            src={`/images/isometric-tree-${selection[0].tree}.svg`}
            alt=''
            className={clsx('w-52 z-10', {
              'animate-custom-bounce z-0': currentTree === 0,
            })}
            style={{ marginBottom: '-150px' }}
          />
          <div
            className='flex flex-row gap-2 '
            style={{ marginBottom: '-150px' }}
          >
            <img
              src={`/images/isometric-tree-${selection[1].tree}.svg`}
              alt=''
              className={clsx('w-52 z-10', {
                'animate-custom-bounce z-0': currentTree === 1,
              })}
            />
            <img
              src={`/images/isometric-tree-${selection[2].tree}.svg`}
              alt=''
              className={clsx('w-52 z-10', {
                'animate-custom-bounce z-0': currentTree === 2,
              })}
            />
          </div>
          <div
            className='flex flex-row gap-2 '
            style={{ marginBottom: '-150px' }}
          >
            <img
              src={`/images/isometric-tree-${selection[3].tree}.svg`}
              alt=''
              className={clsx('w-52 z-10', {
                'animate-custom-bounce z-10': currentTree === 3,
              })}
            />
            <img
              src={`/images/isometric-tree-${selection[4].tree}.svg`}
              alt=''
              className={clsx('w-52 z-10', {
                'animate-custom-bounce z-10': currentTree === 4,
              })}
            />
            <img
              src={`/images/isometric-tree-${selection[5].tree}.svg`}
              alt=''
              className={clsx('w-52 z-10', {
                'animate-custom-bounce z-10': currentTree === 5,
              })}
            />
          </div>
          <div
            className='flex flex-row gap-2'
            style={{ marginBottom: '-150px' }}
          >
            <img
              src={`/images/isometric-tree-${selection[6].tree}.svg`}
              alt=''
              className={clsx('w-52 z-10', {
                'animate-custom-bounce z-10': currentTree === 6,
              })}
            />
            <img
              src={`/images/isometric-tree-${selection[7].tree}.svg`}
              alt=''
              className={clsx('w-52 z-10', {
                'animate-custom-bounce z-10': currentTree === 7,
              })}
            />
          </div>{' '}
          <img
            src={`/images/isometric-tree-${selection[8].tree}.svg`}
            alt=''
            className={clsx('w-52 z-10', {
              'animate-custom-bounce z-10': currentTree === 8,
            })}
          />
        </div>
      </div>
    </div>
  );
}
