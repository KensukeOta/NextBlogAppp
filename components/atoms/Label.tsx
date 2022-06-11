import type { FC } from "react";
import type { Props } from "../../types/Props";

export const Label: FC<Props> = (props) => {
  return (
    <label htmlFor={props.for}>{props.children}</label>
  );
};