import type { NextPage } from "next";
import type { SubmitHandler } from "react-hook-form";
import type { User } from "../../../types/User";
import type { Post } from "../../../types/Post";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../../stores/authUserState";
import { TitleArea } from "../../../components/molecules/TitleArea";
import { PostArea } from "../../../components/molecules/PostArea";
import { SubmitButton } from "../../../components/atoms/SubmitButton";
import { Layout } from "../../../components/templates/Layout";

const PostEdit: NextPage = () => {
  const authUser = useRecoilValue<User>(authUserState);

  const router = useRouter();

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
      console.log(data);
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