import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const Blog2 = () => {
  return (
    <>
      <Layout>
        <section className="py-20">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Our Blog
            </h1>
            <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-blue-500 text-gray-800">
                  Home
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center">
                <a href="#" className="hover:text-blue-500 text-gray-800">
                  Our Services
                </a>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </li>
              <li className="inline-flex items-center text-gray-400">
                <span>Web Development</span>
              </li>
            </ul>
            <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
              <div className="w-full lg:w-1/2 px-4 lg:pr-20 order-1 lg:order-0">
                <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading">
                  <Link href="#">
                    <a className="hover:text-blue-500">
                      {" "}
                      WHAT COULD 5G CHANGE ABOUT THE WAY WE USE TECHNOLOGY?
                    </a>
                  </Link>
                </h3>
                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  The rise of 5G networks create the potential for new ways of
                  working as well as benefits to the daily lives of many people
                  that they probably haven???t considered yet. We often think
                  about devices bringing us faster and more powerful technology,
                  but the rise of 5G really represents a new option of
                  services...
                  {/* that could be available to us regardless of our devices. I???d
                  like to look at a few ways that 5G networks will change the
                  way we work and live with technology over the next several
                  years. */}
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                <Link href="#">
                  <a>
                    <img
                      className="h-80 w-full object-cover rounded"
                      src="/assets/imgs/placeholders/img-6.png"
                      alt="Perpetualtech"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
              <div className="w-full lg:w-1/2 px-4 lg:pr-20 order-1 lg:order-0">
                <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading">
                  <Link href="#">
                    <a className="hover:text-blue-500">
                      {" "}
                      HIGH AVAILABILITY: ENSURE CONTINUOUS UPTIME FOR YOUR USERS
                    </a>
                  </Link>
                </h3>
                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  A Single Point of Failure can exist at many levels in a
                  complex system; ranging from hardware failure, loss of network
                  from a service provider or a software failure on a server.
                  Redundancies must be addressed at each level to ensure High...
                  {/* Availability. Hardware redundancies are a common best practice
                  today and are already implemented by many organizations.
                  However, many of these same organizations have not yet
                  implemented solutions for Application Level availability. */}
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                <Link href="#">
                  <a>
                    <img
                      className="h-80 w-full object-cover rounded"
                      src="/assets/imgs/placeholders/img-7.png"
                      alt="Perpetualtech"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
              <div className="w-full lg:w-1/2 px-4 lg:pr-20 order-1 lg:order-0">
                <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading">
                  <Link href="#">
                    <a className="hover:text-blue-500">
                      {" "}
                      QUARTERLY BUSINESS REVIEWS: PLANNING FOR SUCCESS
                    </a>
                  </Link>
                </h3>
                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  There are lots of different attitudes people take towards
                  technology in their businesses. Some look at technology as an
                  expense that needs to be managed. Others are ambivalent and
                  have both frustrations and enthusiasm depending on what kind...
                  {/* of technology you???re talking about. There are some good
                  reasons these attitudes exist in the first place. Most people
                  can relate to technology projects going way over budget, or
                  having to deal with a system that is a bottleneck getting in
                  the way of work, or that ransomware attack that caused so much
                  stress and anxiety. */}
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 order-0 lg:order-1">
                <Link href="#">
                  <a>
                    <img
                      className="h-80 w-full object-cover rounded"
                      src="/assets/imgs/placeholders/img-8.png"
                      alt="Perpetualtech"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap -mx-4 mb-12 wow animate__animated animate__fadeIn animated hover-up-5">
              <div className="w-full lg:w-1/2 px-4 lg:pr-20 order-1 lg:order-0">
                <h3 className="mb-4 text-xl md:text-2xl font-bold font-heading">
                  <Link href="#">
                    <a className="hover:text-blue-500 capital">
                      {" "}
                      Enhanced Blockchain-as-a-Service
                    </a>
                  </Link>
                </h3>
                <p className="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
                  In its infancy, blockchain solutions offered encryption,
                  immutability, and some form of distribution. As time went on,
                  we saw new features added including advancements in
                  tokenization, interoperability, and more recently, a surge in
                  Decentralized Autonomous Organizations (DAOs). The next ...
                  {/* blockchain solutions has begun and with it comes advancements
                  in parallel technologies such as artificial intelligence (AI),
                  the Internet of Things (IoT), and decentralized identity
                  solutions. Over the coming decade, these technologies will be
                  intertwined to create enhanced blockchain solutions that will
                  offer businesses more security for data integrity, accurate
                  analytics, and provable truth. */}
                </p>
              </div>
              <div className="w-full lg:w-1/2 px-4 mb-8 order-0">
                <Link href="#">
                  <a>
                    <img
                      className="h-80 w-full object-cover rounded"
                      src="/assets/imgs/placeholders/img-9.jpg"
                      alt="Perpetualtech"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Blog2;
