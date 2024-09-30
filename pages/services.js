import React from "react";
import Layout from "../components/layout/Layout";
import CounterUp from "../components/elements/Counterup";

const Services = () => {
  return (
    <>
      <Layout>
        <section className="-mt-24 bg-blueGray-100 pb-12 pt-40">
          <div className="container">
            <h1 className="wow animate__animated animate__fadeIn animated mb-5 text-2xl font-bold lg:text-5xl">
              Our Services
            </h1>
            <ul className="wow animate__animated animate__fadeIn animated flex pb-12 text-sm text-gray-500 lg:text-sm">
              <li className="inline-flex items-center">
                <a href="#" className="text-gray-800 hover:text-blue-500">
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
                <a href="#" className="text-gray-800 hover:text-blue-500">
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
          </div>
        </section>
        <section className="pt-12">
          <div className="container mx-auto py-12">
            <div className="flex flex-wrap">
              <div
                className="wow animate__animated animate__fadeIn order-none mb-12 w-full px-3 pr-12 md:order-none md:mb-0 md:w-1/2"
                data-wow-delay=".5s"
              >
                <img
                  className="mx-auto sm:max-w-sm lg:max-w-full"
                  src="/assets/imgs/placeholders/img-6.jpg"
                  alt="Monst"
                />
              </div>
              <div className="order-1 w-full px-3 md:order-1 md:w-1/2">
                <div className="max-w-md-2">
                  <div className="mb-4">
                    <span
                      className="wow animate__animated animate__fadeInDown rounded-xl bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-500"
                      data-wow-delay=".9s"
                    >
                      Why choose us
                    </span>
                    <h2
                      className="font-heading wow animate__animated animate__fadeIn mt-3 text-4xl font-bold"
                      data-wow-delay=".3s"
                    >
                      We Provide Best <br />
                      <span className="text-blue-500">Web design </span>services
                    </h2>
                  </div>

                  <p
                    className="wow animate__animated animate__fadeIn mb-6 leading-loose text-blueGray-400"
                    data-wow-delay=".1s"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    luctus eget justo et iaculis.
                  </p>

                  <div className="flex flex-wrap">
                    <div
                      className="wow animate__animated animate__fadeIn w-full items-start pb-8 pt-4 md:w-1/2"
                      data-wow-delay=".2s"
                    >
                      <div className="mb-5 w-8 text-blue-500">
                        <span className="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white">
                          1
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading mb-2 text-xl font-semibold">
                          Web design UX/UI
                        </h3>
                        <p className="text-sm leading-loose text-blueGray-400">
                          Effective web design guides users’ eyes and tells them
                          where to look..
                        </p>
                      </div>
                    </div>
                    <div
                      className="wow animate__animated animate__fadeIn w-full items-start py-4 md:w-1/2"
                      data-wow-delay=".3s"
                    >
                      <div className="mb-5 w-8 text-blue-500">
                        <span className="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white">
                          2
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading mb-2 text-xl font-semibold">
                          React Development
                        </h3>
                        <p className="text-sm leading-loose text-blueGray-400">
                          Developers save time by not having to write the same
                          code multiple times.
                        </p>
                      </div>
                    </div>
                    <div
                      className="wow animate__animated animate__fadeIn w-full items-start py-4 md:w-1/2"
                      data-wow-delay=".4s"
                    >
                      <div className="mb-5 w-8 text-blue-500">
                        <span className="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white">
                          3
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading mb-2 text-xl font-semibold">
                          Ecommerce Build
                        </h3>
                        <p className="text-sm leading-loose text-blueGray-400">
                          Marketing through social media is a great way to gain
                          new insights, acquire loyal customers, and get
                          creative.
                        </p>
                      </div>
                    </div>
                    <div
                      className="wow animate__animated animate__fadeIn w-full items-start py-4 md:w-1/2"
                      data-wow-delay=".5s"
                    >
                      <div className="mb-5 w-8 text-blue-500">
                        <span className="mr-4 inline-block rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white">
                          4
                        </span>
                      </div>
                      <div>
                        <h3 className="font-heading mb-2 text-xl font-semibold">
                          CMS Development
                        </h3>
                        <p className="text-sm leading-loose text-blueGray-400">
                          CMS allows you to quickly create a mobile-friendly web
                          application.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blueGray-50 pb-24 pt-20" id="how-we-work">
          <div className="container">
            <div className="mb-12 flex max-w-2xl flex-wrap items-center justify-between lg:max-w-full">
              <div className="mb-4 w-full lg:mb-0 lg:w-1/2">
                <h2 className="font-heading wow animate__animated animate__fadeInDown text-3xl font-bold md:text-4xl">
                  <span>We are </span>
                  <span className="text-blue-500">awesome team </span>
                  <br />
                  <span>for your business dream</span>
                </h2>
              </div>
            </div>
            <div className="-mx-3 -mb-6 flex flex-wrap justify-stretch text-center">
              <div
                className="hover-up-5 wow animate__animated animate__fadeIn mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
                data-wow-delay=".3s"
              >
                <div className="h-full rounded bg-white p-12 shadow">
                  <div className="font-heading mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-800">
                    1
                  </div>
                  <img
                    className="mx-auto my-4 h-36"
                    src="/assets/imgs/illustrations/eating.svg"
                    alt="Project Initialization"
                  />
                  <h3 className="font-heading mb-2 text-xl font-bold">
                    Project Initialization
                  </h3>
                  <p className="text-sm leading-relaxed text-blueGray-400">
                    Lay a strong foundation for your AI-driven project. Our team
                    ensures the right setup and integration of AI tools such as
                    ChatGPT to streamline your business processes.
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 wow animate__animated animate__fadeIn mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
                data-wow-delay=".5s"
              >
                <div className="h-full rounded bg-white p-12 shadow">
                  <div className="font-heading mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-800">
                    2
                  </div>
                  <img
                    className="mx-auto my-4 h-36"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="Project Planning"
                  />
                  <h3 className="font-heading mb-2 text-xl font-bold">
                    Project Planning
                  </h3>
                  <p className="text-sm leading-relaxed text-blueGray-400">
                    Develop a comprehensive plan that integrates AI components,
                    ensuring your project stays organized, methodical, and on
                    track. Tools like predictive analytics and machine learning
                    models are embedded to provide foresight and strategic
                    insights.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 mb-6 w-full px-3 lg:w-1/3">
                <div
                  className="wow animate__animated animate__fadeIn h-full rounded bg-white p-12 shadow"
                  data-wow-delay=".7s"
                >
                  <div className="font-heading mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-800">
                    3
                  </div>
                  <img
                    className="mx-auto my-4 h-36"
                    src="/assets/imgs/illustrations/tasks.svg"
                    alt="Project Organization"
                  />
                  <h3 className="font-heading mb-2 text-xl font-bold">
                    Project Organization
                  </h3>
                  <p className="text-sm leading-relaxed text-blueGray-400">
                    Ensure the smooth execution of your project by utilizing AI
                    solutions to maintain organization and efficiency. ChatGPT
                    aids in real-time communication and task management, helping
                    to keep your team aligned and on track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;
