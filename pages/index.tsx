import type { NextPage } from 'next'
import type { User } from '../types/User';
import Head from 'next/head'
import { useRecoilValue } from 'recoil';
import { authUserState } from '../stores/authUserState';
import { Layout } from '../components/templates/Layout'

const Home: NextPage = () => {
  const authUser = useRecoilValue<User>(authUserState);
  
  return (
    <Layout>
      <Head>
        <title>NextBlogApp</title>
        <meta name="description" content="BlogApp for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className="font-bold">トップページ</h1>
      <p>Welcome! {authUser ? authUser.name : "stranger"}</p>
    </Layout>
  );
};

export default Home;
