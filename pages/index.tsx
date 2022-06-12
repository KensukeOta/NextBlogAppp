import type { NextPage } from 'next'
import type { User } from '../types/User';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { authUserState } from '../stores/authUserState';
import { Layout } from '../components/templates/Layout'
import { PostCreateLink } from '../components/atoms/PostCreateLink';

const Home: NextPage = () => {
  const [user, setUser] = useState<User>();
  
  const authUser = useRecoilValue<User>(authUserState);

  useEffect(() => {
    setUser(authUser);
  }, []);
  
  return (
    <Layout>
      <Head>
        <title>NextBlogApp</title>
        <meta name="description" content="BlogApp for Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <h1 className="font-bold">トップページ</h1>
      <p>Welcome! {user ? authUser.name : "stranger"}</p>

      <nav className="text-center">
        <PostCreateLink />
      </nav>
    </Layout>
  );
};

export default Home;
