import type { FC } from "react";
import type { Props } from "../../types/Props";

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      { children }
    </>
  );
};