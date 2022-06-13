import type { GetServerSideProps, NextPage } from "next";
import type { PostProps } from "../../types/PostProps";
import Head from "next/head";
import { axios } from "../../lib/axios";
import { Layout } from "../../components/templates/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${context.params!.id}`);
  const post = res.data;

  return {
    props: {
      post
    }
  };
};

const PostContent: NextPage<PostProps> = ({ post }) => {
  return (
    <Layout>
      <Head>
        <title>{post!.title} - NextBlogApp</title>
      </Head>

      <h1 className="font-bold">{post!.title}</h1>
      <p className="whitespace-pre-line">{post!.body}</p>
    </Layout>
  );
};

export default PostContent;