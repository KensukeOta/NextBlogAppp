import type { FC } from "react";
import type { UserRegisterProps } from "../../types/UserRegisterProps";
import { Label } from "../atoms/Label";
import { PasswordConfirmInput } from "../atoms/PasswordConfirmInput";

export const PasswordConfirmArea: FC<UserRegisterProps> = ({ register, getValues }) => {
  return (
    <>
      <dt>
        <Label for="password_confirmation">パスワード確認用</Label>
      </dt>
      <dd>
        <PasswordConfirmInput register={register} getValues={getValues} />
      </dd>
    </>
  );
};