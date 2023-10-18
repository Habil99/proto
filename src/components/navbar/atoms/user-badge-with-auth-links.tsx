"use client";

import Link from "next/link";
import { useAppSelector } from "@/store";
import { shallowEqual } from "react-redux";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const UserBadgeWithAuthLinks = () => {
  const { user } = useAppSelector((state) => state.user, shallowEqual);

  return !user ? (
    <>
      <Link className="max-lg:hidden" href="/sign-in">
        Sign In
      </Link>
      <Link className="max-lg:hidden ml-5 btn btn__primary" href="/sign-up">
        Become a member
      </Link>
    </>
  ) : (
    <Link href="/profile">
      <Avatar className="rounded-full w-12 h-12  border border-theme-color text-color-main flex items-center justify-center">
        <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default UserBadgeWithAuthLinks;
