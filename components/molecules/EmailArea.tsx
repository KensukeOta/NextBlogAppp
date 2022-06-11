import type { FC } from "react";
import type { UserRegisterProps } from "../../types/UserRegisterProps";
import { EmailInput } from "../atoms/EmailInput";
import { Label } from "../atoms/Label";

export const EmailArea: FC<UserRegisterProps> = ({ register }) => {
  return (
    <>
      <dt>
        <Label for="email">メールアドレス</Label>
      </dt>
      <dd>
        <EmailInput register={register} />
      </dd>
    </>
  );
};