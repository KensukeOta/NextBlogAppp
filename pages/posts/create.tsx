import type { NextPage } from "next";
import type { User } from "../../types/User";
import type { Post } from "../../types/Post";
import type { SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { axios } from "../../lib/axios";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../stores/authUserState";
import { Layout } from "../../components/templates/Layout";
import { TitleArea } from "../../components/molecules/TitleArea";
import { PostArea } from "../../components/molecules/PostArea";
import { SubmitButton } from "../../components/atoms/SubmitButton";

const PostCreate: NextPage = () => {
  const authUser = useRecoilValue<User>(authUserState);

  const router = useRouter();

  useEffect(() => {
    if (!authUser) {
      router.replace("/login");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Post>({
    defaultValues: {
      title: "",
      body: "",
      user_id: authUser.id
    }
  });

  const onSubmit: SubmitHandler<Post> = async (data) => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/create`, { title: data.title, body: data.body, user_id: data.user_id });
      router.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Layout>
      <Head>
        <title>記事投稿フォーム - NextBlogApp</title>
      </Head>

      <h1 className="font-bold">記事投稿フォーム</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <dl>
          <TitleArea register={register} />
          <p className="text-red-500">{errors.title?.message}</p>
          <PostArea register={register} />
          <p className="text-red-500">{errors.body?.message}</p>
          <SubmitButton>投稿する</SubmitButton>
        </dl>
      </form>
    </Layout>
  );
};

export default PostCreate;