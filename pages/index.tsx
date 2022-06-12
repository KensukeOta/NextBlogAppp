import type { GetServerSideProps, NextPage } from 'next'
import type { User } from '../types/User';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { axios } from '../lib/axios';
import { useRecoilValue } from 'recoil';
import { authUserState } from '../stores/authUserState';
import { Layout } from '../components/templates/Layout'
import { PostCreateLink } from '../components/atoms/PostCreateLink';
import { PostProps } from '../types/PostProps';
import { PostItem } from '../components/organisms/PostItem';

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts = res.data;

  return {
    props: {
      posts
    }
  };
};

const Home: NextPage<PostProps> = ({ posts }) => {
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

      <ul>
        {posts!.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </Layout>
  );
};

export default Home;
