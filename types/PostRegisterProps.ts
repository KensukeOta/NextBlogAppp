import type { UseFormRegister } from "react-hook-form";
import type { Post } from "./Post";

export interface PostRegisterProps {
  register: UseFormRegister<Post>;
}