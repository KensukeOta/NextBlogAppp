import type { FC } from "react";
import type { Props } from "../../types/Props";

export const SubmitButton: FC<Props> = (props) => {
  return (
    <button type="submit" className="border">{props.children}</button>
  );
};