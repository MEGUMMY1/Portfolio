import Layout from '@/components/Layout/Layout';
import Modal from '@/components/Modal/Modal';
import Spinner from '@/components/Spinner/Spinner';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => setIsLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>HYEJEAN CHO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RecoilRoot>
        {isLoading ? (
          <Spinner />
        ) : (
          <Layout url={`https://chohyejean.co.kr${router.asPath}`}>
            <Component {...pageProps} />
            <Modal />
          </Layout>
        )}
      </RecoilRoot>
    </>
  );
}
