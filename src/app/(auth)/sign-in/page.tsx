"use client";

import Logo from "@/components/logo/logo";
import Link from "next/link";
import { Button } from "@/components";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const signIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const values = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };

    await fetch("/api/v1/auth/sign-in", {
      method: "POST",
      body: JSON.stringify(values),
    })
      .then(async (res) => {
        if (res.ok) return res.json();
        throw new Error(JSON.stringify(await res.json()));
      })
      .then(() => router.push("/"))
      .catch((err) => {
        console.log("error", err);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-border-color p-12 rounded-lg flex flex-col text-center bg-indigo-900/10">
        <Link className="flex justify-center" href="/">
          <Logo />
        </Link>
        <h3 className="mt-10 mb-4">Sign in</h3>
        <p>Sign into your account for full access</p>
        <form className="max-w-sm my-8" onSubmit={signIn}>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="bg-body-background-color border border-border-color h-12
             w-full px-8 mb-6 font-medium text-color-main rounded-3xl
             focus:border-theme-color outline-0 shadow-none placeholder:opacity-60"
            type="text"
            id="email"
            name="email"
            placeholder="Your email address"
          />
          <label className="sr-only" htmlFor="password">
            Password
          </label>
          <input
            className="bg-body-background-color border border-border-color h-12
             w-full px-8 mb-6 font-medium text-color-main rounded-3xl
             focus:border-theme-color outline-0 shadow-none placeholder:opacity-60"
            type="password"
            id="password"
            name="password"
            placeholder="Your password"
          />
          <Button
            className="w-full"
            variant="primary"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Sign in"}
          </Button>
        </form>
        <p>
          Don`t have an account yet?{" "}
          <Link className="underline hover:text-theme-color" href="/sign-up">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
