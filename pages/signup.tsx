import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/templates/Layout";

const Signup: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ユーザー登録フォーム - NextBlogApp</title>
      </Head>
      
      <h1 className="font-bold">ユーザー登録フォーム</h1>
    </Layout>
  );
};

export default Signup;