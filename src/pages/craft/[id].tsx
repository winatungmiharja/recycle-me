/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Split from 'react-split';

import InfoSection from '@/components/craft/InfoSection';
import StepSection from '@/components/craft/StepSection';
import TodoSection from '@/components/craft/TodoSection';
import VideoSection from '@/components/craft/VideoSection';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function CraftSessionPage() {
  const data = {
    id: '53060',
    name: 'Burek',
    category: 'Side',
    area: 'Croatian',
    instructions: [
      {
        id: '0',
        step: 'Fry the finely chopped onions and minced meat in oil',
        checked: false,
      },
      {
        id: '1',
        step: 'Add the salt and pepper',
        checked: false,
      },
      {
        id: '2',
        step: 'Grease a round baking tray and put a layer of pastry in it',
        checked: false,
      },
      {
        id: '3',
        step: 'Cover with a thin layer of filling and cover this with another layer of filo pastry which must be well coated in oil',
        checked: false,
      },
      {
        id: '4',
        step: 'Put another layer of filling and cover with pastry',
        checked: false,
      },
      {
        id: '5',
        step: 'When you have five or six layers, cover with filo pastry, bake at 200ºC/392ºF for half an hour and cut in quarters and serve.',
        checked: false,
      },
    ],
    tags: ['Streetfood', ' Onthego'],
    image: 'https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg',
    youtube: 'https://www.youtube.com/watch?v=YsJXZwE5pdY',
    ingredients: [
      {
        id: 1,
        name: 'Filo Pastry',
        qty: '1 Packet',
        checked: false,
      },
      {
        id: 2,
        name: 'Minced Beef',
        qty: '150g',
        checked: false,
      },
      {
        id: 3,
        name: 'Onion',
        qty: '150g',
        checked: false,
      },
      {
        id: 4,
        name: 'Oil',
        qty: '40g',
        checked: false,
      },
      {
        id: 5,
        name: 'Salt',
        qty: 'Dash',
        checked: false,
      },
      {
        id: 6,
        name: 'Pepper',
        qty: 'Dash',
        checked: false,
      },
    ],
    source:
      'https://www.visit-croatia.co.uk/croatian-cuisine/croatian-recipes/',
    isDone: false,
  };
  const [isVideoMode, setIsVideoMode] = React.useState(false);
  const [isStepMode, setIsStepMode] = React.useState(false);
  const [allSize, setAllSize] = React.useState([50, 50]);
  const [leftSize, setLeftSize] = React.useState([40, 60]);
  const [rightSize, setRightSize] = React.useState([50, 50]);

  const [isIngredientCompleted, setIsIngredientCompleted] =
    React.useState(false);
  const videoModeWindow = () => {
    if (isVideoMode) {
      setAllSize([50, 50]);
      setRightSize([50, 50]);
    } else {
      setAllSize([0, 100]);
      setRightSize([100, 0]);
    }
    setIsVideoMode(!isVideoMode);
  };
  const stepModeWindow = () => {
    if (isStepMode) {
      setLeftSize([40, 60]);
    } else {
      setLeftSize([0, 100]);
    }
    setIsStepMode(!isStepMode);
  };
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section>
          {/* <SessionModal isOpen={isOpen} onClose={onClose} img={data.image} /> */}
          <Split className='flex' sizes={allSize} minSize={0} gutterSize={16}>
            <Split
              sizes={leftSize}
              gutterSize={16}
              minSize={0}
              direction='vertical'
              style={{ height: 'calc(100vh - 105px)' }}
            >
              <InfoSection />
              <StepSection />
            </Split>
            <Split
              sizes={rightSize}
              gutterSize={16}
              minSize={0}
              direction='vertical'
              style={{ height: 'calc(100vh - 105px)' }}
            >
              <VideoSection />
              <TodoSection />
            </Split>
          </Split>
        </section>
      </main>
    </Layout>
  );
}
