import type { FC } from "react";
import type { UserRegisterProps } from "../../types/UserRegisterProps";

export const EmailInput: FC<UserRegisterProps> = ({ register }) => {
  return (
    <input type="email" {...register("email", { required: "入力してください" })} name="email" id="email" placeholder="メールアドレス" className="border" />
  );
};