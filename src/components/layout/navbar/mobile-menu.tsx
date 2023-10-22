"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@/components";
import React, { useEffect, useState } from "react";
import { navLinks } from "@/components/layout/navbar/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileMenu = () => {
  const pathname = usePathname();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const toggleMenuIsOpen = () => {
    setMenuIsOpen((prevState) => !prevState);
    document.body.classList.toggle("menu-is-open");
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      if (window.innerWidth > 1024 && menuIsOpen) {
        setMenuIsOpen(false);
        document.body.classList.remove("menu-is-open");
      }
    });
  }, []);

  useEffect(() => {
    if (menuIsOpen) {
      toggleMenuIsOpen();
    }
  }, [pathname]);

  return (
    <>
      <Button className="!px-2 text-xl" onClick={toggleMenuIsOpen}>
        <GiHamburgerMenu />
      </Button>
      <div
        className={`z-10 fixed top-20 left-0 right-0 bottom-0 w-full h-screen bg-body-background-color ${
          menuIsOpen ? "" : "hidden"
        }`}
      >
        <div className="g-container border-t border-b border-solid border-border-color">
          <ul className="my-4">
            {navLinks.map((link) => (
              <li key={link.path} className="my-2">
                <Link
                  className="inline-flex items-center h-12 pl-4 rounded-sm hover:bg-tag-background-color w-full transition-all"
                  href={link.path}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
          <Link className="btn" href="/sign-in">
            Sign in
          </Link>
          <Link className="btn btn__primary" href="/sign-up">
            Become a member
          </Link>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
