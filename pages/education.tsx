import React from 'react';
import Education from '@/components/Education/Education';
import { InitialPageMeta } from '@/components/Meta/Meta';
import { SSRMetaProps } from '@/components/Meta/Meta.types';
import { serviceURL } from '@/constants/constants';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const OGTitle = '조혜진 | Education';
  const OGUrl = `${serviceURL}`;
  return {
    props: {
      OGTitle,
      OGUrl,
    },
  };
};

export default function EducationPage({ OGTitle, OGUrl }: SSRMetaProps) {
  return (
    <>
      <InitialPageMeta title={OGTitle} url={OGUrl} />
      <Education />
    </>
  );
}
