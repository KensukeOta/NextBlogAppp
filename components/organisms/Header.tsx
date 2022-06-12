import type { FC } from "react";
import type { User } from "../../types/User";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { authUserState } from "../../stores/authUserState";
import { LogoutButton } from "../atoms/LogoutButton";

export const Header: FC = () => {
  const authUser = useRecoilValue<User>(authUserState);
  
  return (
    <header className="flex justify-between border-b">
      <Link href="/">
        <a>
          <h1>NextBlogApp</h1>
        </a>
      </Link>

      <nav>
        {!authUser && (
          <>
            <Link href="/signup">
              <a>新規登録</a>
            </Link>

            <Link href="/login">
              <a>ログイン</a>
            </Link>
          </>
        )}
        {authUser && <LogoutButton />}
      </nav>
    </header>
  );
};