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
      <h1 className="font-bold">トップページ</h1>
    </div>
  );
};

export default Home;
