import type { FC } from "react";
import type { Props } from "../../types/Props";
import { useRouter } from "next/router";
import { RequiredText } from "./RequiredText";

export const Label: FC<Props> = (props) => {
  const router = useRouter();
  
  return (
    <label htmlFor={props.for}>{props.children} {router.pathname === "/signup" && <RequiredText />}</label>
  );
};