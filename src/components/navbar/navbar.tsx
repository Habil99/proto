import Logo from "@/components/ui/logo/logo";
import Link from "next/link";
import { navLinks } from "@/components/navbar/constants";
import navbarStyles from "./navbar.module.scss";
import { Button } from "@/components";
import { ThemeSwitcher } from "@/components/ui/theme-switcher/theme-switcher";
import { BiSearch } from "react-icons/bi";
import MobileMenu from "@/components/navbar/mobile-menu";

export const Navbar = () => {
  return (
    <>
      <nav className="g-nav mb-8 md:mb-16">
        <div className="g-container pt-6 flex items-cente">
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
            <Link className="max-lg:hidden" href="/auth/login">
              Sign In
            </Link>
            <Button className="max-lg:hidden ml-5" variant="primary" rounded>
              Become a member
            </Button>
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
