"use client";
import { useRouter } from "next/navigation";
import { appCookies } from "@/utils";
import { useTransition } from "react";

export default function LogoutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const logout = () => {
    console.log("worked");
    appCookies.delete("token");
    router.push("/sign-in");
  };

  return (
    <button className="w-full h-full text-left" onClick={logout}>
      {isPending ? "Logging out..." : "Logout"}
    </button>
  );
}
