import Logo from "@/components/logo/logo";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="g-container my-4">
      <Link href="/">
        <Logo />
      </Link>
    </nav>
  );
};

export default Navbar;
