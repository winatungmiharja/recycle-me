/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import useTrash from '@/store/TrashStore';
const makeToday = (): string => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const yyyy = today.getFullYear();

  const h = String(today.getHours());
  const m = String(today.getMinutes());

  return `${dd}/${mm}/${yyyy} ${h}:${m}`;
};

export default function Alert({
  value,
  image,
  setAlert,
  retakeImage,
}: {
  value: number | undefined;
  image: string | undefined;
  setAlert: (value: boolean) => void;
  retakeImage: () => void;
}) {
  const [input, setInput] = React.useState<string>('');
  const [today, setToday] = React.useState<string>(makeToday());
  const store = useTrash();
  const [detectedItem, setDetectedItem] = React.useState(
    store.trash[value ? value : 0]
  );

  const addToCollection = () => {
    const item = {
      title: String(input),
      category: detectedItem.title,
      date: today,
      img: String(image),
    };
    store.update(detectedItem.id, item);
    console.log(store.history);
    setAlert(false);
    retakeImage();
  };
  return (
    <div className='flex flex-col gap-4 p-6 bg-blue-200'>
      <div className='flex items-center gap-4'>
        <img src={image} alt='' className='w-3/4 rounded-2xl ' />

        <div>
          <h4>Captured Image</h4>
          <p>{`at ${today}`}</p>
        </div>
      </div>
      <div className='flex items-center gap-4'>
        <img src={detectedItem.preview} className='w-20' alt='preview' />
        <div>
          <p>Detected as :</p>
          <h3>{detectedItem.title}</h3>
          <p>{detectedItem.desc}</p>
        </div>
      </div>
      <p>Lets save it to your collection!✨</p>
      <div className='flex flex-col gap-1'>
        <p>give me a name : </p>
        <input
          value={input}
          placeholder='ex : coca cola bottle'
          onChange={(_) => setInput(_.target.value)}
          className='relative flex px-4 py-2 rounded-lg focus:outline-none ring-2 ring-offset-2 ring-offset-gray-800 ring-white ring-opacity-60'
        />
      </div>

      <button
        disabled={input?.length === 0}
        className='inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border border-transparent rounded-md disabled:opacity-25 disabled:cursor-not-allowed hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
        onClick={addToCollection}
      >
        Add to Collection
      </button>
    </div>
  );
}
