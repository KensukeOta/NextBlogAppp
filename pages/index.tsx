import type { NextPage } from 'next'
import Head from 'next/head'
import { Layout } from '../components/templates/Layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>NextBlogApp</title>
        <meta name="description" content="BlogApp for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className="font-bold">トップページ</h1>
    </Layout>
  );
};

export default Home;
