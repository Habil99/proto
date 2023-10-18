"use client";
import Link from "next/link";
import Logo from "@/components/ui/logo/logo";
import { Button } from "@/components";
import { FormEvent } from "react";

export default function SignUp() {
  const signUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = {
      name: e.currentTarget.userName.value,
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    };
    await fetch("/api/v1/auth/sign-up", {
      method: "POST",
      body: JSON.stringify(values),
    });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-border-color p-12 rounded-lg flex flex-col text-center bg-indigo-900/10">
        <Link className="flex justify-center" href="/">
          <Logo />
        </Link>
        <h3 className="mt-10 mb-4">Sign up</h3>
        <p>Get access to members only content.</p>
        <form className="max-w-sm my-8" onSubmit={signUp}>
          <label className="sr-only" htmlFor="name">
            Name
          </label>
          <input
            className="bg-body-background-color border border-border-color h-12
             w-full px-8 mb-6 font-medium text-color-main rounded-3xl
             focus:border-theme-color outline-0 shadow-none placeholder:opacity-60"
            type="text"
            id="name"
            name="userName"
            placeholder="Your name"
          />
          <label className="sr-only" htmlFor="name">
            Email
          </label>
          <input
            className="bg-body-background-color border border-border-color h-12
             w-full px-8 mb-6 font-medium text-color-main rounded-3xl
             focus:border-theme-color outline-0 shadow-none placeholder:opacity-60"
            type="email"
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
          <label className="sr-only" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input
            className="bg-body-background-color border border-border-color h-12
             w-full px-8 mb-6 font-medium text-color-main rounded-3xl
             focus:border-theme-color outline-0 shadow-none placeholder:opacity-60"
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm password"
          />
          <Button className="w-full" variant="primary" type="submit">
            Sign up
          </Button>
        </form>
        <p>
          Already have an account?{" "}
          <Link className="underline hover:text-theme-color" href="/sign-in">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
