import '../styles/globals.css'
import type{ NextPage } from 'next'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
};

export default MyApp;
