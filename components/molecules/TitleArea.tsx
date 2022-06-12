import type { FC } from "react";
import type { PostRegisterProps } from "../../types/PostRegisterProps";
import { Label } from "../atoms/Label";
import { TitleInput } from "../atoms/TitleInput";

export const TitleArea: FC<PostRegisterProps> = ({ register }) => {
  return (
    <>
      <dt>
        <Label for="title">タイトル</Label>
      </dt>
      <dd>
        <TitleInput register={register} />
      </dd>
    </>
  );
};