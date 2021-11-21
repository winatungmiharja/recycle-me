/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRouter } from 'next/router';
import Router from 'next/router';
import * as React from 'react';
import Split from 'react-split';

import InfoSection from '@/components/craft/InfoSection';
import StepSection from '@/components/craft/StepSection';
import TodoSection from '@/components/craft/TodoSection';
import VideoSection from '@/components/craft/VideoSection';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import useCraft, { CraftSelection } from '@/store/CraftStore';

export default function CraftSessionPage() {
  const store = useCraft();
  const router = useRouter();
  const getIdFromCraft = (
    crafts: CraftSelection[],
    id: number
  ): CraftSelection => {
    const data = crafts.filter((item) => item.id === id);
    return data[0];
  };
  const index = Number(router.query.id);
  const data = getIdFromCraft(store.crafts, index);

  const fetchInformation = async () => {
    const fetchCraft = await fetch(
      'https://recyle-web.herokuapp.com/information/showInformation.php'
    );
    const res = await fetchCraft.json();
    if (res.isSuccess) {
      store.setCrafts(res.data);
    } else {
      console.error(res.error);
    }
  };

  React.useEffect(() => {
    fetchInformation();
  }, []);

  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section>
          {/* <SessionModal isOpen={isOpen} onClose={onClose} img={data.image} /> */}
          {data && (
            <Split
              className='flex flex-col lg:flex-row'
              sizes={[100, 100]}
              minSize={0}
              gutterSize={16}
            >
              <Split
                sizes={[40, 60]}
                gutterSize={16}
                minSize={0}
                direction='vertical'
                style={{
                  height: 'calc(100vh - 105px)',
                }}
              >
                <InfoSection value={data} />
                <StepSection value={data} />
              </Split>
              <Split
                sizes={[50, 50]}
                gutterSize={16}
                minSize={0}
                direction='vertical'
                style={{
                  height: 'calc(100vh - 105px)',
                }}
              >
                <VideoSection value={data} />
                <TodoSection value={data} />
              </Split>
            </Split>
          )}
        </section>
      </main>
    </Layout>
  );
}
