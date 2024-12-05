import { serviceURL } from '@/constants/constants';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>조혜진</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="조혜진의 포트폴리오" />
        <meta
          property="og:description"
          content="프론트엔드 개발자 조혜진 포트폴리오"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/57613101?v=4"
        />
        <meta property="og:url" content={serviceURL} />
        <meta property="og:type" content="website" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="프론트엔드 개발자 조혜진 포트폴리오"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
