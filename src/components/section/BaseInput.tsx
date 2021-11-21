import { RadioGroup } from '@headlessui/react';
import * as React from 'react';

import useTree, { TreeSelection } from '@/store/TreeStore';

import { Selection } from './TreeInputSection';

const getIdFromSelection = (
  selections: Selection[],
  category: 'base' | 'tree',
  currentTree: TreeSelection
) => {
  const select = selections.filter(
    (item) => item.value === currentTree[category]
  );
  return select[0].id;
};

export default function BaseInput({
  selections,
  category,
}: {
  selections: Selection[];
  category: 'base' | 'tree';
}) {
  const store = useTree();

  const [selected, setSelected] = React.useState(
    selections[
      getIdFromSelection(selections, category, store.trees[store.selectedTree])
    ]
  );

  React.useEffect(() => {
    setSelected(
      selections[
        getIdFromSelection(
          selections,
          category,
          store.trees[store.selectedTree]
        )
      ]
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [store.selectedTree]);

  const updateTree = (item: Selection) => {
    setSelected(item);
    const newData: TreeSelection = {
      ...store.trees[store.selectedTree],
      [category]: item.value,
    };
    store.update(newData);
  };

  return (
    <div className='w-full '>
      <div className='w-full mx-auto'>
        <RadioGroup value={selected} onChange={(item) => updateTree(item)}>
          <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
          <div className='space-y-2'>
            {selections.map((base) => (
              <RadioGroup.Option
                key={base.name}
                value={base}
                className={({ active, checked }) =>
                  `${
                    active
                      ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                      : ''
                  }
                  ${
                    checked
                      ? 'bg-blue-300 bg-opacity-75 text-white'
                      : 'bg-white'
                  }
                    relative rounded-xl shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className='flex items-center justify-between w-full'>
                      <div className='flex items-center gap-4'>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={base.img} alt='' className='w-10' />
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {base.name}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as='span'
                            className={`inline ${
                              checked ? 'text-sky-100' : 'text-gray-500'
                            }`}
                          >
                            <span>{base.desc}</span>{' '}
                            <span aria-hidden='true'>&middot;</span>{' '}
                            <span>{base.coin}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className='flex-shrink-0 text-white'>
                          <CheckIcon className='w-6 h-6' />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}

function CheckIcon(
  props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg viewBox='0 0 24 24' fill='none' {...props}>
      <circle cx={12} cy={12} r={12} fill='#fff' opacity='0.2' />
      <path
        d='M7 13l3 3 7-7'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}
