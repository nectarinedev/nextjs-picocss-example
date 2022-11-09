import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

import PublicLayout from '@/components/Layout/PublicLayout';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main>
        <article>
          <h1>Sign In</h1>
          <form>
            <input
              type='text'
              name='login'
              placeholder='Login'
              aria-label='Login'
              autoComplete='username'
              required
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              aria-label='Password'
              autoComplete='current-password'
              required
            />
            <fieldset>
              <label htmlFor='remember'>
                <input
                  type='checkbox'
                  role='switch'
                  id='remember'
                  name='remember'
                />
                Remember me
              </label>
            </fieldset>
            <button type='submit' className='contrast'>
              Login
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
