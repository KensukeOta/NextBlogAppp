import type { FC } from "react";
import type { PostProps } from "../../types/PostProps";
import type { User } from "../../types/User";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../stores/authUserState";
import { PostEditLink } from "../atoms/PostEditLink";
import { PostDeleteButton } from "../atoms/PostDeleteButton";

export const PostItem: FC<PostProps> = (props) => {
  const [user, setUser] = useState<User>();
  
  const authUser = useRecoilValue<User>(authUserState);

  useEffect(() => {
    setUser(authUser);
  }, []);
  
  return (
    <li className="border">
      <Link href={`/posts/${props.post!.id}`}>
        <a><h1 className="font-bold">{props.post!.title}</h1></a>
      </Link>
      <nav className="flex justify-between">
        <p>by {props.post!.user!.name}</p>
        {user && authUser.id === props.post!.user!.id && <PostEditLink id={props.post!.id} />}
        {user && authUser.id === props.post!.user!.id && <PostDeleteButton id={props.post!.id} />}
      </nav>
    </li>
  );
};