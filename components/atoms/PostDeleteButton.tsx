import type { FC } from "react";
import type { Post } from "../../types/Post";
import { axios } from "../../lib/axios";
import { useRouter } from "next/router";

export const PostDeleteButton: FC<Post> = (props) => {
  const router = useRouter();
  
  const destroy = async () => {
    if (!confirm("この記事を削除しますか？")) {
      return;
    }
    await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/posts/${props.id}/destroy`);
    router.replace("/");
  };
  
  return (
    <button onClick={destroy} className="text-red-500">削除</button>
  );
};