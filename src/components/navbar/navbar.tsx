import Logo from "@/components/logo/logo";
import Link from "next/link";
import { navLinks } from "@/components/navbar/constants";
import navbarStyles from "./navbar.module.scss";
import { Button } from "@/components";
import { BiSearch } from "react-icons/bi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import ThemeSwitcher from "@/components/theme-switcher/theme-switcher";
import MobileMenu from "@/components/navbar/mobile-menu";
import { userService } from "@/services";

export const Navbar = async () => {
  const user = await userService.getCurrentUser();

  return (
    <nav className="g-nav mb-8 md:mb-16">
      <div className="g-container pt-6 flex items-center">
        <Link href="/">
          <Logo />
        </Link>
        <ul className="hidden lg:flex gap-4 items-center mx-10">
          {navLinks.map((link) => (
            <li className={navbarStyles.nav__link} key={link.path}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-2">
          <Button className="!px-2" icon={<BiSearch />} size="lg" />
          <ThemeSwitcher />
          {!user ? (
            <>
              <Link className="max-lg:hidden" href="/sign-in">
                Sign In
              </Link>
              <Link
                className="max-lg:hidden ml-5 btn btn__primary"
                href="/sign-up"
              >
                Become a member
              </Link>
            </>
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="rounded-full w-12 h-12  border border-theme-color text-color-main flex items-center justify-center">
                  <AvatarFallback>{user.name[0].toUpperCase()}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="min-w-[12rem]" align="end">
                <DropdownMenuItem>
                  <Link className="w-full" href="/profile/create-post">
                    Write a post
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <div className="lg:hidden">
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};
