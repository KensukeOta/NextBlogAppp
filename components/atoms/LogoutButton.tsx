import type { FC } from "react";
import type { User } from "../../types/User";
import { useRouter } from "next/router";
import { axios } from "../../lib/axios";
import { useSetRecoilState } from "recoil";
import { authUserState } from "../../stores/authUserState";

export const LogoutButton: FC = () => {
  const setAuthUser = useSetRecoilState<User | string>(authUserState);

  const router = useRouter();
  
  const logout = async () => {
    await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`);
    router.replace("/login");
    setAuthUser("");
  };
  
  return (
    <button onClick={logout}>ログアウト</button>
  );
};