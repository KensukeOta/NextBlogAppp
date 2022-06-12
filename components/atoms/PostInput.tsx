import type { FC } from "react";
import type { PostRegisterProps } from "../../types/PostRegisterProps";

export const PostInput: FC<PostRegisterProps> = ({ register }) => {
  return (
    <textarea {...register("body", { required: "入力してください", maxLength: { value: 1000, message: "1000文字以内で入力してください" } })} name="body" id="body" placeholder="本文" className="border"></textarea>
  );
};