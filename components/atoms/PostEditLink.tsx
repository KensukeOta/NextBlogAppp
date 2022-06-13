import type { FC } from "react";
import type { Post } from "../../types/Post";
import Link from "next/link";

export const PostEditLink: FC<Post> = (props) => {
  return (
    <Link href={`/posts/${props.id}/edit`}>
      <a className="text-green-500">更新</a>
    </Link>
  );
};