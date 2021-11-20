/* eslint-disable @next/next/no-img-element */
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import PickTreeInput from '@/components/section/PickTreeInput';
import TreeInputSection from '@/components/section/TreeInputSection';
import TreeSection from '@/components/section/TreeSection';
import Seo from '@/components/Seo';
import SectionText from '@/components/Text/SectionText';

export default function ForestPage() {
  return (
    <Layout>
      <Seo templateTitle='Forest' />
      <main>
        <section>
          <div className='flex flex-wrap text-white'>
            <div className='w-full p-6 mt-8 lg:mt-0 lg:w-4/12 lg:pr-4'>
              <SectionText title={'My Forest'} />
              <div className='flex flex-col items-start gap-4'>
                <p className='mt-4'>Tree Selection</p>
                <PickTreeInput />
                <p className='mt-4'>Model Selection</p>
                <TreeInputSection />
              </div>
            </div>
            <div className='self-start w-full lg:w-8/12 '>
              <TreeSection />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
