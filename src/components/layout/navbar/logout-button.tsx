"use client";
import { useRouter } from "next/navigation";
import { appCookies } from "@/utils";

export default function LogoutButton() {
  const router = useRouter();

  const logout = () => {
    appCookies.delete("token");
    window.location.href = "/sign-in";
  };

  return (
    <button className="w-full h-full text-left" onClick={logout}>
      Log out
    </button>
  );
}
