import Link from "next/link";
import type { FC } from "react";
import type { PostProps } from "../../types/PostProps";
import { PostEditLink } from "../atoms/PostEditLink";

export const PostItem: FC<PostProps> = (props) => {
  return (
    <li className="border">
      <Link href={`/posts/${props.post!.id}`}>
        <a><h1 className="font-bold">{props.post!.title}</h1></a>
      </Link>
      <nav className="flex justify-between">
        <p>by {props.post!.user!.name}</p>
        <PostEditLink id={props.post!.id} />
      </nav>
    </li>
  );
};