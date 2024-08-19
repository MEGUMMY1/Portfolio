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
      <Head>
        <title>HYEJEAN CHO</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="조혜진의 포트폴리오" />
        <meta
          property="og:description"
          content="프론트엔드 개발자 조혜진의 포트폴리오입니다."
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/57613101?v=4"
        />
        <meta property="og:url" content="https://chohyejean.netlify.app/" />
        <meta property="og:type" content="website" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="프론트엔드 개발자 조혜진의 포트폴리오입니다."
        />
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
