import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "../components/templates/Layout";

const Login: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ログインフォーム - NextBlogApp</title>
      </Head>
      
      <h1 className="font-bold">ログインフォーム</h1>
    </Layout>
  );
};

export default Login;