import * as React from 'react';
import { FiPlayCircle } from 'react-icons/fi';
import ReactPlayer from 'react-player';

import { CraftSelection } from '@/store/CraftStore';

export default function VideoSection({ value }: { value: CraftSelection }) {
  return (
    <div className='relative text-white bg-gray-800 rounded-3xl'>
      <div className='rounded-3xl'>
        <ReactPlayer
          style={{
            position: 'absolute',
            borderRadius: '1.5rem',
            clipPath: 'inset(0 round 24px 24px 24px 24px)',
          }}
          light={true}
          playIcon={<FiPlayCircle color='#fff' size={30} />}
          url={value.video}
          width='100%'
          height='100%'
          playing
        />
      </div>
    </div>
  );
}
