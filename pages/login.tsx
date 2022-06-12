import type { NextPage } from "next";
import type { User } from "../types/User";
import type { SubmitHandler } from "react-hook-form";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { axios } from "../lib/axios";
import { useRecoilState } from "recoil";
import { authUserState } from "../stores/authUserState";
import { Layout } from "../components/templates/Layout";
import { EmailArea } from "../components/molecules/EmailArea";
import { PasswordArea } from "../components/molecules/PasswordArea";
import { SubmitButton } from "../components/atoms/SubmitButton";

const Login: NextPage = () => {
  const [error, setError] = useState("");
  
  const [authUser, setAuthUser] = useRecoilState<User>(authUserState);
  
  const router = useRouter();

  useEffect(() => {
    if (authUser) {
      router.replace("/");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, { email: data.email, password: data.password });
      if (res.data.id) {
        router.replace("/");
        setAuthUser(res.data);
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Layout>
      <Head>
        <title>ログインフォーム - NextBlogApp</title>
      </Head>

      <h1 className="font-bold">ログインフォーム</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <p className="text-red-500">{error}</p>
        <dl>
          <EmailArea register={register} />
          <p className="text-red-500">{errors.email?.message}</p>
          <PasswordArea register={register} />
          <p className="text-red-500">{errors.password?.message}</p>
          <SubmitButton>ログイン</SubmitButton>
        </dl>
      </form>
    </Layout>
  );
};

export default Login;