import type { GetServerSideProps, NextPage } from "next";
import type { SubmitHandler } from "react-hook-form";
import type { PostProps } from "../../../types/PostProps";
import type { User } from "../../../types/User";
import type { Post } from "../../../types/Post";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { axios } from "../../../lib/axios";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../../stores/authUserState";
import { TitleArea } from "../../../components/molecules/TitleArea";
import { PostArea } from "../../../components/molecules/PostArea";
import { SubmitButton } from "../../../components/atoms/SubmitButton";
import { Layout } from "../../../components/templates/Layout";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${context.params!.id}`);
  const post = res.data;

  return {
    props: {
      post
    }
  };
};

const PostEdit: NextPage<PostProps> = ({ post }) => {
  const authUser = useRecoilValue<User>(authUserState);

  const router = useRouter();

  useEffect(() => {
    if (!authUser || authUser.id !== post!.user_id) {
      router.replace("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: {
      title: post!.title,
      body: post!.body,
      user_id: post!.user_id,
    }
  });

  const onSubmit: SubmitHandler<Post> = async (data) => {
    try {
      await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${post!.id}/update`, { title: data.title, body: data.body, user_id: data.user_id });
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Layout>
      <Head>
        <title>記事更新フォーム - NextBlogApp</title>
      </Head>

      <h1 className="font-bold">記事更新フォーム</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <dl>
          <TitleArea register={register} />
          <p className="text-red-500">{errors.title?.message}</p>
          <PostArea register={register} />
          <p className="text-red-500">{errors.body?.message}</p>
          <SubmitButton>更新する</SubmitButton>
        </dl>
      </form>
    </Layout>
  );
};

export default PostEdit;