import Logo from "@/components/logo/logo";
import Link from "next/link";
import { navLinks } from "@/components/navbar/constants";
import navbarStyles from "./navbar.module.scss";
import { Button } from "@/components";
import { ThemeSwitcher } from "@/components/theme-switcher/theme-switcher";
import { BiSearch } from "react-icons/bi";

export const Navbar = () => {
  return (
    <nav className="g-container my-6 flex items-center">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex gap-4 items-center mx-10">
        {navLinks.map((link) => (
          <li className={navbarStyles.nav__link} key={link.path}>
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className="ml-auto flex items-center gap-2">
        <Button className="!px-2" icon={<BiSearch />}
                size="lg" />
        <ThemeSwitcher />
        <Link href="/auth/login">Sign In</Link>
        <Button
          className="ml-5"
          mode="primary"
          rounded
        >
          Become a member
        </Button>
      </div>
    </nav>
  );
};
