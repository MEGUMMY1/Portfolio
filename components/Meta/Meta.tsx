import Head from 'next/head';
import { InitialPageMetaProps } from './Meta.types';
import { serviceURL } from '@/constants/constants';

export function InitialPageMeta({ title, url }: InitialPageMetaProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="프론트엔드 개발자 조혜진 포트폴리오"
      />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/57613101?v=4"
      />
      <meta property="og:url" content={url ?? serviceURL} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
