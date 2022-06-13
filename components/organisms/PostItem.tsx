import type { FC } from "react";
import type { PostProps } from "../../types/PostProps";
import type { User } from "../../types/User";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../stores/authUserState";
import { PostEditLink } from "../atoms/PostEditLink";

export const PostItem: FC<PostProps> = (props) => {
  const authUser = useRecoilValue<User>(authUserState);
  
  return (
    <li className="border">
      <Link href={`/posts/${props.post!.id}`}>
        <a><h1 className="font-bold">{props.post!.title}</h1></a>
      </Link>
      <nav className="flex justify-between">
        <p>by {props.post!.user!.name}</p>
        {authUser.id === props.post!.user!.id && <PostEditLink id={props.post!.id} />}
      </nav>
    </li>
  );
};