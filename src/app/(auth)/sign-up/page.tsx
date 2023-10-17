import Link from "next/link";
import Logo from "@/components/ui/logo/logo";
import { Button } from "@/components";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-border-color p-12 rounded-lg flex flex-col text-center">
        <Link className="flex justify-center" href="/">
          <Logo />
        </Link>
        <h3 className="mt-10 mb-4">Sign up</h3>
        <p>Get access to members only content.</p>
        <form className="max-w-sm my-8">
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
            Sign in
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
