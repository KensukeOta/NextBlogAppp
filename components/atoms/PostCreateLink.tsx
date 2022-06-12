import type { FC } from "react";
import Link from "next/link";

export const PostCreateLink: FC = () => {
  return (
    <Link href="/posts/create">
      <a className="border">投稿する</a>
    </Link>
  );
};