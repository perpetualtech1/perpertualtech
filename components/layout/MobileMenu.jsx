import React, { useState } from "react";
import Link from "next/link";

const MobileMenu = ({ hiddenClass, handleRemove }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <div
        className={`${hiddenClass} navbar-menu relative z-50 transition duration-300`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-blueGray-800 opacity-25"></div>
        <nav className="fixed inset-y-0 left-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white p-6 transition duration-300">
          <div className="mb-8 flex items-center">
            <Link href="#">
              <a className="mr-auto text-3xl font-semibold leading-none">
                <img
                  className="h-10"
                  src="/assets/imgs/logos/monst-logo.svg"
                  alt="Monst"
                />
              </a>
            </Link>
            <button className="navbar-close" onClick={handleRemove}>
              <svg
                className="size-6 cursor-pointer text-blueGray-400 hover:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewbox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul className="mobile-menu">
              <li
                className={
                  isActive.key == 1
                    ? "menu-item-has-children active mb-1 rounded-xl"
                    : "menu-item-has-children mb-1 rounded-xl"
                }
                onClick={() => handleToggle(1)}
              >
                <span className="menu-expand">+</span>
                <Link href="#">
                  <a className="block rounded-xl p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Home
                  </a>
                </Link>
                <ul className={isActive.key == 1 ? "dropdown pl-5" : "hidden"}>
                  <li>
                    <Link href="/index">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Home 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-2">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Home 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-3">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Home 3
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-4">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Home 4
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/index-5">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Home 5
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-1 rounded-xl">
                <Link href="/about">
                  <a className="block rounded-xl p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/services">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Services
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/portfolio">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/pricing">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Pricing
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/team">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Team
                  </a>
                </Link>
              </li>
              <li
                className={
                  isActive.key == 2
                    ? "menu-item-has-children active mb-1 rounded-xl"
                    : "menu-item-has-children mb-1 rounded-xl"
                }
                onClick={() => handleToggle(2)}
              >
                <span className="menu-expand">+</span>
                <Link href="#">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Blog
                  </a>
                </Link>
                <ul className={isActive.key == 2 ? "dropdown pl-5" : "hidden"}>
                  <li>
                    <Link href="/blog">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Category 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-2">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Category 2
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Single 1
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog-single-2">
                      <a className="block p-3 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                        Single 2
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="mb-1">
                <Link href="/faqs">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Faqs
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/testimonials">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Testimonial
                  </a>
                </Link>
              </li>
              <li className="mb-1">
                <Link href="/contact">
                  <a className="block p-4 text-sm text-blueGray-500 hover:bg-blue-50 hover:text-blue-500">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
            <div className="mt-4 border-t border-blueGray-100 pt-6">
              <Link href="/signup">
                <a className="mb-3 block rounded bg-blue-400 px-4 py-3 text-center text-xs font-semibold leading-none text-white hover:bg-blue-500">
                  Sign Up
                </a>
              </Link>
              <Link href="/login">
                <a className="mb-2 block rounded border border-blue-200 px-4 py-3 text-center text-xs font-semibold leading-none text-blue-500 hover:border-blue-300 hover:text-blue-700">
                  Log In
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-blueGray-400">
              <span>Get in Touch</span>
              <span className="text-blue-500 underline hover:text-blue-500">
                contact@monst.com
              </span>
            </p>
            <a className="inline-block px-1" href="https://facebook.com">
              <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
            </a>
            <a className="inline-block px-1" href="https://twitter.com">
              <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
            </a>
            <a className="inline-block px-1" href="https://www.instagram.com">
              <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
