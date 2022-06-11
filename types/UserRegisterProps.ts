import type { UseFormGetValues, UseFormRegister } from "react-hook-form";
import type { User } from "./User";

export interface UserRegisterProps {
  register: UseFormRegister<User>;
  getValues?: UseFormGetValues<User>;
};