import type { FC } from "react";
import type { UserRegisterProps } from "../../types/UserRegisterProps";
import { Label } from "../atoms/Label";
import { PasswordInput } from "../atoms/PasswordInput";

export const PasswordArea: FC<UserRegisterProps> = ({ register }) => {
  return (
    <>
      <dt>
        <Label for="password">パスワード</Label>
      </dt>
      <dd>
        <PasswordInput register={register} />
      </dd>
    </>
  );
};