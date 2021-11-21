import * as React from 'react';

import Layout from '@/components/layout/Layout';
import AchievementSection from '@/components/section/AchievementSection';
import CategorySection from '@/components/section/CategorySection';
import HistorySection from '@/components/section/HistorySection';
import Seo from '@/components/Seo';
import SectionText from '@/components/Text/SectionText';

export default function HomePage(): JSX.Element {
  return (
    <Layout>
      <Seo templateTitle='Home' />
      <main>
        <section>
          <div className='flex flex-wrap'>
            <div className='w-full px-6 py-6 bg-gray-800 lg:w-8/12 rounded-3xl'>
              <SectionText title={'Home🍀'} subTitle={'12 Desember 2021'} />
              <AchievementSection />
              <CategorySection />
            </div>
            <div className='w-full mt-8 lg:mt-0 lg:w-4/12 lg:pl-4'>
              <HistorySection />
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
