import React from 'react';
import Activities from '@/components/Activities/Activities';
import { InitialPageMeta } from '@/components/Meta/Meta';
import { SSRMetaProps } from '@/components/Meta/Meta.types';
import { serviceURL } from '@/constants/constants';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const OGTitle = '조혜진 | Activities';
  const OGUrl = `${serviceURL}`;
  return {
    props: {
      OGTitle,
      OGUrl,
    },
  };
};

export default function ActivitiesPage({ OGTitle, OGUrl }: SSRMetaProps) {
  return (
    <>
      <InitialPageMeta title={OGTitle} url={OGUrl} />
      <Activities />
    </>
  );
}
