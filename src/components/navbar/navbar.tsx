import Logo from "@/components/logo/logo";
import Link from "next/link";
import { navLinks } from "@/components/navbar/constants";
import navbarStyles from "./navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className="g-container my-4 flex">
      <Link href="/">
        <Logo />
      </Link>
      <ul className="flex gap-4 items-center mx-10">
        {navLinks.map((link) => (
          <li
            className={navbarStyles.nav__link}
            key={link.path}
          >
            <Link href={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

