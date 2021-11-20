import { AppProps } from 'next/app';

import '@/styles/globals.css';
import '@/styles/colors.css';
import '@/styles/craft.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
