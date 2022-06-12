import type { FC } from "react";
import type { PostProps } from "../../types/PostProps";

export const PostItem: FC<PostProps> = (props) => {
  return (
    <li className="border">
      <h1 className="font-bold">{props.post!.title}</h1>
      <nav>
        <p>by {props.post!.user.name}</p>
      </nav>
    </li>
  );
};