import { RadioGroup } from '@headlessui/react';
import * as React from 'react';

import useTree from '@/store';
const treeSection: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Example() {
  const store = useTree();
  const [selected, setSelected] = React.useState(store.selectedTree);
  const setActiveTree = (item: number) => {
    setSelected(item);
    store.setSelectedTree(item);
  };

  return (
    <div className='w-full'>
      <div className='w-full max-w-md mx-auto'>
        <RadioGroup value={selected} onChange={(item) => setActiveTree(item)}>
          <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>
          <div className='flex gap-2'>
            {treeSection.map((tree, i) => (
              <RadioGroup.Option
                key={tree}
                value={i}
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
                    flex-shrink-0 relative rounded-full shadow-md w-8 h-8 cursor-pointer flex text-center items-center focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className='flex items-center justify-center w-full'>
                      <div className='flex items-center'>
                        <div className='text-sm'>
                          <RadioGroup.Label
                            as='p'
                            className={`font-medium  ${
                              checked ? 'text-white' : 'text-gray-900'
                            }`}
                          >
                            {tree}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {/* {checked && (
                        <div className='flex-shrink-0 text-white'>
                          <CheckIcon className='w-6 h-6' />
                        </div>
                      )} */}
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
