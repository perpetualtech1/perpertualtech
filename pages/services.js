import React from "react";
import Layout from "../components/layout/Layout";
import CounterUp from "../components/elements/Counterup";

const Services = () => {
  return (
    <>
      <Layout>
        <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
          <div className="container">
            <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">
              Our Services
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
          </div>
        </section>
        <section className="pt-12">
          <div className="container py-12 mx-auto">
            <div className="flex flex-wrap">
              <div
                className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <img
                  className="sm:max-w-sm lg:max-w-full mx-auto"
                  src="/assets/imgs/placeholders/img-6.jpg"
                  alt="Monst"
                />
              </div>
              <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
                <div className="max-w-md-2">
                  <div className="mb-4">
                    <span
                      className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown"
                      data-wow-delay=".9s"
                    >
                      Why choose us
                    </span>
                    <h2
                      className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      We Provide Best <br />
                      <span className="text-blue-500">Web design </span>services
                    </h2>
                  </div>

                  <p
                    className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    luctus eget justo et iaculis.
                  </p>

                  <div className="flex flex-wrap">
                    <div
                      className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn"
                      data-wow-delay=".2s"
                    >
                      <div className="w-8 mb-5 text-blue-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                          1
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Web design UX/UI
                        </h3>
                        <p className="text-blueGray-400 leading-loose text-sm">
                          Effective web design guides users’ eyes and tells them
                          where to look..
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <div className="w-8 mb-5 text-blue-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                          2
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          React Development
                        </h3>
                        <p className="text-blueGray-400 leading-loose text-sm">
                          Developers save time by not having to write the same
                          code multiple times.
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div className="w-8 mb-5 text-blue-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                          3
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          Ecommerce Build
                        </h3>
                        <p className="text-blueGray-400 leading-loose text-sm">
                          Marketing through social media is a great way to gain
                          new insights, acquire loyal customers, and get
                          creative.
                        </p>
                      </div>
                    </div>
                    <div
                      className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      <div className="w-8 mb-5 text-blue-500">
                        <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">
                          4
                        </span>
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold font-heading">
                          CMS Development
                        </h3>
                        <p className="text-blueGray-400 leading-loose text-sm">
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

        <section className="pt-20 pb-24 bg-blueGray-50" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                  <span>We are </span>
                  <span className="text-blue-500">awesome team </span>
                  <br />
                  <span>for your business dream</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center justify-stretch">
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-12 bg-white shadow rounded h-full">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    1
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/eating.svg"
                    alt="Project Initialization"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Project Initialization
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Lay a strong foundation for your AI-driven project. Our team
                    ensures the right setup and integration of AI tools such as
                    ChatGPT to streamline your business processes.
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="p-12 bg-white shadow rounded h-full">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    2
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="Project Planning"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Project Planning
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Develop a comprehensive plan that integrates AI components,
                    ensuring your project stays organized, methodical, and on
                    track. Tools like predictive analytics and machine learning
                    models are embedded to provide foresight and strategic
                    insights.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                <div
                  className="p-12 bg-white shadow h-full rounded wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    3
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/tasks.svg"
                    alt="Project Organization"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Project Organization
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
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
