import type { FC } from "react";
import Link from "next/link";

export const Header: FC = () => {
  return (
    <header className="flex justify-between border-b">
      <Link href="/">
        <a>
          <h1>NextBlogApp</h1>
        </a>
      </Link>

      <nav>
        <Link href="/signup">
          <a>新規登録</a>
        </Link>

        <Link href="/login">
          <a>ログイン</a>
        </Link>
      </nav>
    </header>
  );
};