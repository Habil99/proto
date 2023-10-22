import Link from "next/link";
import { GiOpenWound } from "react-icons/gi";

export const Sidebar = () => {
  return (
    <div className="border-r-2 border-border-color py-4 px-2 bg-opacity-20 min-w-[16rem]">
      <ul>
        <li>
          <Link
            className="w-full flex bg-body-background-color hover:bg-transparent transition-all
             py-2 hover:bg-gradient-to-br hover:from-body-background-color hover:before:to-blue-800
             before:inset-0 hover:before:filter hover:before:blur-2xl
             rounded px-3 before:transition-all justify-between items-center"
            href="/profile/posts"
          >
            <span className="mr-auto">Your stories</span>
            <GiOpenWound />
          </Link>
        </li>
      </ul>
    </div>
  );
};
