import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { axios } from "../../lib/axios";
import { Layout } from "../../components/templates/Layout";
import { PostProps } from "../../types/PostProps";

export const getServerSideProps: GetServerSideProps = async (params) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${params.query.id}`);
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
        <title>{post!.title}</title>
      </Head>

      <h1 className="font-bold">{post!.title}</h1>
      <p className="whitespace-pre-line">{post!.body}</p>
    </Layout>
  );
};

export default PostContent;