import type { NextPage } from "next";
import type { User } from "../types/User";
import Head from "next/head";
import { SubmitHandler, useForm } from "react-hook-form";
import { Layout } from "../components/templates/Layout";
import { NameArea } from "../components/molecules/NameArea";
import { EmailArea } from "../components/molecules/EmailArea";
import { PasswordArea } from "../components/molecules/PasswordArea";
import { PasswordConfirmArea } from "../components/molecules/PasswordConfirmArea";
import { SubmitButton } from "../components/atoms/SubmitButton";

const Signup: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<User>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    }
  });

  const onSubmit: SubmitHandler<User> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <Layout>
      <Head>
        <title>ユーザー登録フォーム - NextBlogApp</title>
      </Head>

      <h1 className="font-bold">ユーザー登録フォーム</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <dl>
          <NameArea register={register} />
          <p className="text-red-500">{errors.name?.message}</p>
          <EmailArea register={register} />
          <p className="text-red-500">{errors.email?.message}</p>
          <PasswordArea register={register} />
          <p className="text-red-500">{errors.password?.message}</p>
          <PasswordConfirmArea register={register} getValues={getValues} />
          <p className="text-red-500">{errors.password_confirmation?.message}</p>
          <SubmitButton>登録する</SubmitButton>
        </dl>
      </form>
    </Layout>
  );
};

export default Signup;