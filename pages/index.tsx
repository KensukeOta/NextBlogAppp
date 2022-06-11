import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>NextBlogApp</title>
        <meta name="description" content="BlogApp for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
