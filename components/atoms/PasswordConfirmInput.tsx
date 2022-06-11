import type { FC } from "react";
import type { UserRegisterProps } from "../../types/UserRegisterProps";

export const PasswordConfirmInput: FC<UserRegisterProps>  = ({ register, getValues }) => {
  return (
    <input type="password" {...register("password_confirmation", { required: "入力してください", validate: {message: (value) => value === getValues!('password') || "パスワードが一致しません"} })} name="password_confirmation" id="password_confirmation" placeholder="パスワード確認用" className="border" />
  );
};