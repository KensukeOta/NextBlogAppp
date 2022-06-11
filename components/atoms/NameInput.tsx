import type { FC } from "react";
import type { UserRegisterProps } from "../../types/UserRegisterProps";

export const NameInput: FC<UserRegisterProps> = ({ register }) => {
  return (
    <input type="text" {...register("name", { required: "入力してください", maxLength: { value: 10, message: "10文字以内で入力してください" } })} name="name" id="name" placeholder="名前" className="border" />
  );
};