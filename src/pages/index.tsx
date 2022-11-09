import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

import PublicLayout from '@/components/Layout/PublicLayout';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <article></article>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
