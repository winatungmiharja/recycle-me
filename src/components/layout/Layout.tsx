import * as React from 'react';

import DashboardProvider from './provider/context';
import Overlay from './provider/overlay';
import SideNavigation from './sidenavigation';
import TopNavigation from './topnavigation';

const style = {
  container: `bg-gray-900 h-screen overflow-hidden relative`,
  mainContainer: `flex flex-col h-screen pl-0 w-full lg:pl-20 `,
  main: `h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:pt-4 lg:pt-0 lg:px-4`,
};
export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <DashboardProvider>
      <div className={style.container}>
        <div className='flex items-start'>
          <Overlay />
          <SideNavigation mobilePosition='right' />
          <div className={style.mainContainer}>
            <TopNavigation />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
    </DashboardProvider>
  );
}
