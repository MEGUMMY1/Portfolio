import React from 'react';
import Projects from '@/components/Projects/Projects';
import { InitialPageMeta } from '@/components/Meta/Meta';
import { SSRMetaProps } from '@/components/Meta/Meta.types';
import { serviceURL } from '@/constants/constants';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const OGTitle = '조혜진 | Projects';
  const OGUrl = `${serviceURL}`;
  return {
    props: {
      OGTitle,
      OGUrl,
    },
  };
};

export default function ProjectsPage({ OGTitle, OGUrl }: SSRMetaProps) {
  return (
    <>
      <InitialPageMeta title={OGTitle} url={OGUrl} />
      <Projects />
    </>
  );
}
