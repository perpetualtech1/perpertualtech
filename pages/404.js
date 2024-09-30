import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Layout>
        <section className="pb-32 pt-20">
          <div className="container text-center">
            <img
              className="wow animate__animated animate__fadeIn mx-auto mb-12 md:max-w-md"
              src="/assets/imgs/illustrations/error2.png"
              alt="Monst"
            />
            <span
              className="font-heading wow animate__animated animate__fadeIn text-4xl font-bold text-blue-500"
              data-wow-delay=".2s"
            >
              Error 404
            </span>
            <h2
              className="font-heading wow animate__animated animate__fadeIn mb-2 text-4xl font-bold"
              data-wow-delay=".3s"
            >
              Something went wrong!
            </h2>
            <p
              className="wow animate__animated animate__fadeIn mb-6 text-blueGray-400"
              data-wow-delay=".4s"
            >
              Sorry, but we are unable to open this page.
            </p>
            <div>
              <Link href="/">
                <a
                  className="wow animate__animated animate__fadeIn mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold leading-none text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block"
                  data-wow-delay=".5s"
                >
                  Go back to Homepage
                </a>
              </Link>
              <Link href="/contact">
                <a
                  className="wow animate__animated animate__fadeIn block rounded bg-blueGray-50 px-8 py-4 text-center text-xs font-semibold leading-none text-blueGray-500 hover:bg-blueGray-100 hover:text-blueGray-800 sm:inline-block"
                  data-wow-delay=".6s"
                >
                  Contact Us
                </a>
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Custom404;
