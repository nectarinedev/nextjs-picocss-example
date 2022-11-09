import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

import PublicLayout from '@/components/Layout/PublicLayout';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <hgroup>
        <h1>Next.js and Pico.css</h1>
        <h2>Example with Next.js and Pico.css</h2>
      </hgroup>

      <section>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </section>

      <section>
        <h3>Lists</h3>
        <ul>
          <li>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </li>
          <li>
            Morbi tristique senectus et netus. Porttitor rhoncus dolor purus non
            enim praesent elementum facilisis leo.
          </li>
          <li>
            Sed libero enim sed faucibus turpis in eu. Fermentum leo vel orci
            porta non pulvinar neque laoreet suspendisse.
          </li>
        </ul>
      </section>

      <section>
        <h2>Accordions</h2>
        <details>
          <summary>Accordion 1</summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor
            at auctor urna nunc id cursus metus. Dui vivamus arcu felis bibendum
            ut. Iaculis at erat pellentesque adipiscing commodo elit at
            imperdiet. Eget duis at tellus at urna. Dolor sit amet consectetur
            adipiscing. Vel risus commodo viverra maecenas accumsan lacus vel
            facilisis. Duis ut diam quam nulla porttitor. Nunc sed augue lacus
            viverra vitae congue eu. Felis eget velit aliquet sagittis id
            consectetur. At ultrices mi tempus imperdiet. Ac odio tempor orci
            dapibus ultrices. Pulvinar pellentesque habitant morbi tristique
            senectus et netus.
          </p>
        </details>
        <details open>
          <summary>Accordion 2</summary>
          <ul>
            <li>Est ullamcorper eget nulla facilisi etiam dignissim diam.</li>
            <li>Id ornare arcu odio ut sem.</li>
            <li>At ultrices mi tempus imperdiet nulla.</li>
          </ul>
        </details>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <PublicLayout>{page}</PublicLayout>;
};

export default Home;
