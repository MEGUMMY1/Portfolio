import Layout from '@/components/Layout/Layout';
import Modal from '@/components/Modal/Modal';
import Spinner from '@/components/Spinner/Spinner';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const { pathname } = router;

  useEffect(() => {
    const validPaths = [
      '/',
      '/about-me',
      '/activities',
      '/certifications',
      '/education',
      '/projects',
      '/skills-tools',
    ];

    if (!validPaths.includes(pathname)) {
      router.replace('/');
    }
  }, [pathname, router]);

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
