import type { NextPage } from "next";
import type { User } from "../types/User";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import { Layout } from "../components/templates/Layout";
import { EmailArea } from "../components/molecules/EmailArea";
import { PasswordArea } from "../components/molecules/PasswordArea";
import { SubmitButton } from "../components/atoms/SubmitButton";

const Login: NextPage = () => {
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
      console.log(data);
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