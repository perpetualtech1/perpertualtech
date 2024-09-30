import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({ handleHidden }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? "sticky-bar stick mt-4 bg-transparent"
            : "sticky-bar mt-4 bg-transparent"
        }
      >
        <div className="container bg-transparent">
          <nav className="flex items-center justify-between bg-transparent py-3">
            <Link href="/">
              <a className="text-3xl font-semibold leading-none">
                <img
                  className="h-10"
                  src="/assets/imgs/logos/perp-logo.svg"
                  alt="Monst"
                />
              </a>
            </Link>
            <ul className="hidden lg:flex lg:w-auto lg:items-center lg:space-x-12">
              <li className="has-child group relative py-4">
                <Link href="/">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Home
                  </a>
                </Link>
              </li>
              <li className="py-4">
                <Link href="/about">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="py-4">
                <Link href="/services">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Services
                  </a>
                </Link>
              </li>
              <li className="has-child group relative py-4">
                <Link href="/blog">
                  <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
            <div className="hidden lg:block">
              <Link href="/contact">
                <a className="btn-primary hover-up-2">Contact Us </a>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                className="navbar-burger flex items-center rounded border border-blue-200 px-3 py-2 text-blue-500 hover:border-blue-300 hover:text-blue-700"
                onClick={handleHidden}
              >
                <svg
                  className="size-4 fill-current"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Mobile menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
