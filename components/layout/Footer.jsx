import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <section className="py-20">
        <div
          className="wow animate__animated animate__fadeIn container mx-auto px-4"
          data-wow-delay=".3s"
        >
          <div className="-mx-3 mb-12 flex flex-wrap text-center lg:mb-20 lg:text-left">
            <div className="mb-6 w-full px-3 lg:mb-0 lg:w-1/5">
              <Link href="/">
                <a className="leading-none mx-auto inline-block text-3xl font-semibold lg:mx-0">
                  <img
                    className="h-10"
                    src="/assets/imgs/logos/perp-logo.svg"
                    alt="PerpectualTech"
                  />
                </a>
              </Link>
            </div>
            <div className="mb-8 w-full px-3 lg:mb-0 lg:w-2/5">
              <p className="leading-relaxed mx-auto max-w-md text-blueGray-400 lg:mx-0 lg:max-w-full lg:pr-32 lg:text-lg">
                Helping you <strong>maximize</strong> operations management with
                digitization
              </p>
            </div>
            <div className="mb-8 w-full px-3 lg:mb-0 lg:w-1/5">
              {/* <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
                            <p className="lg:text-lg text-blueGray-400">359 Hidden Valley Road, NY</p> */}
            </div>
            <div className="w-full px-3 lg:w-1/5">
              <p className="font-heading mb-2 font-bold text-blueGray-800 lg:mb-4 lg:text-lg">
                Contacts
              </p>
              <p className="text-blueGray-400 lg:text-lg">
                contact@perpectualtech.co
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center lg:flex-row lg:justify-between">
            <p className="text-sm text-blueGray-400">
              &copy; 2023. All rights reserved.
            </p>
            {/* <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href="https://facebook.com">
                                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                            </a>
                            <a className="inline-block px-2" href="https://twitter.com">
                                <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                            </a>
                            <a className="inline-block px-2" href="https://www.instagram.com">
                                <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                            </a>
                        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
