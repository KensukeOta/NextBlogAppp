import type { FC } from "react";
import type { User } from "../../types/User";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../stores/authUserState";
import { LogoutButton } from "../atoms/LogoutButton";

export const Header: FC = () => {
  const [user, setUser] = useState<User>();
  
  const authUser = useRecoilValue<User>(authUserState);

  useEffect(() => {
    setUser(authUser);
  }, []);
  
  return (
    <header className="flex justify-between border-b">
      <Link href="/">
        <a>
          <h1>NextBlogApp</h1>
        </a>
      </Link>

      <nav>
        {!user && (
          <>
            <Link href="/signup">
              <a>新規登録</a>
            </Link>

            <Link href="/login">
              <a>ログイン</a>
            </Link>
          </>
        )}
        {user && <LogoutButton />}
      </nav>
    </header>
  );
};