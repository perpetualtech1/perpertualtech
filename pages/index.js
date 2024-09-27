import React from "react";
import Layout from "../components/layout/Layout";
import Slider2 from "../components/slider/Slider2";
import TextEffect from "../components/elements/TextEffect";
import Link from "next/link";

const features = [
  {
    title: "IT Consultancy",
    description: "We analyze customer requirements and business objectives. Offering strategic advice on how to use technology to achieve goals. In collaboration with our in-house technical team, we manage IT initiatives.",
    icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>,
    delay: ".3s"
  },
  {
    title: "Web Development",
    description: "Our solutions combine design excellence with cutting-edge innovation to contribute greatly to your brand value while meeting your business needs. With everything we provide, you can gain both long-term and short-term investment gains.",
    icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>,
    delay: ".5s"
  },
  {
    title: "App Development",
    description: "We specialize in Custom Application Development worldwide and have a proven track record of creating, integrating, and assisting enterprise-class software products.",
    icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
    delay: ".7s"
  },
  {
    title: "Digital Marketing",
    description: "We offer a variety of marketing services that businesses do not typically have in-house expertise for. Although we have a variety of client goals, our ultimate objective is to help you increase sales through their efforts.",
    icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path></svg>,
    delay: ".9s"
  },
  {
    title: "Chatbot Development",
    description: "We build intelligent chatbots that can mimic human interactions, providing 24/7 support to your customers and enhancing user engagement.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12a10 10 0 108 9.95V22h4a1 1 0 00.76-1.65l-1.82-2.73A9.98 9.98 0 0022 12a10 10 0 00-20 0z" />
  <path d="M9 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12 12.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 100-1.5.75.75 0 000 1.5z" />
</svg>,
    delay: ".3s"
  },
  {
    title: "Machine Learning Solutions",
    description: "We integrate machine learning algorithms to analyze complex data, forecast trends, and provide actionable insights.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.686 2 6 4.686 6 8c0 1.24.406 2.388 1.093 3.314a3.003 3.003 0 00-.633 1.692L4.483 13H3a1 1 0 110-2h1.184A4.992 4.992 0 006 8c0-3.309 2.691-6 6-6s6 2.691 6 6c0 1.419-.495 2.717-1.314 3.742a4.992 4.992 0 00-3.502-1.989A5.978 5.978 0 0012 2z" />
  <circle cx="8" cy="19" r="1" />
  <circle cx="12" cy="19" r="1" />
  <circle cx="16" cy="19" r="1" />
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v5m-4 5v5m8-5v5" />
</svg>,
    delay: ".5s"
  },
  {
    title: "AI Data Analysis",
    description: "Utilize AI algorithms to parse through complex datasets, extracting meaningful insights that drive business intelligence and strategy.",
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c.736 0 1.423-.405 1.776-1.05a5.49 5.49 0 011.224 2.105C15.932 9.76 16 9.239 16 9c0-.826-.673-1.5-1.5-1.5a.752.752 0 00-.278.056 5.507 5.507 0 00-1.948-.13A5.507 5.507 0 0012 11zm0-4c-.736 0-1.423.405-1.776 1.05a5.49 5.49 0 00-1.224-2.105C8.068 6.24 8 5.739 8 5.5 8 4.673 8.673 4 9.5 4S11 4.673 11 5.5a.747.747 0 01-.317 1.444A5.501 5.501 0 0012 11zm0 8c.736 0 1.423-.405 1.776-1.05a5.49 5.49 0 011.224 2.105C15.932 17.76 16 17.261 16 17c0-.826-.673-1.5-1.5-1.5a.752.752 0 00-.278.056 5.507 5.507 0 00-1.948-.13A5.507 5.507 0 0012 18zm4.5-6h.01M9.171 8.071a5.5 5.5 0 00-1.148-1.955M14.735 21a5.5 5.5 0 001.148 1.955M4 13.5c.747 0 1.432.332 1.9.888m2.691-2.671a5.5 5.5 0 001.85-.098M15.356 14.93A5.501 5.501 0 0012.505 16m.315-5.29a5.501 5.501 0 00-1.172-.198c-.265.005-.529.025-.791.079"/>
</svg>,
    delay: ".7s"
  },
  {
    title: "Predictive Analytics",
    description: "Our predictive analytics solutions help businesses anticipate future outcomes based on historical data using advanced machine learning models.",
    icon: <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-.737 0-1.424.405-1.776 1.05a5.5 5.5 0 00-1.224-2.106C8.068 6.24 8 5.739 8 5.5 8 4.673 8.673 4 9.5 4S11 4.673 11 5.5c0 .239-.068.74-.317 1.444A5.501 5.501 0 0012 8zm0 8c.737 0 1.424-.405 1.776-1.05a5.5 5.5 0 011.224 2.106C15.932 17.76 16 18.261 16 18.5 16 19.327 15.327 20 14.5 20S13 19.327 13 18.5c0-.239.068-.74.317-1.444A5.501 5.501 0 0012 16zm4.5-6h-.01M9.171 8.071a5.5 5.5 0 00-1.148-1.955M14.735 21a5.5 5.5 0 001.148 1.955M4 13.5c.747 0 1.432.332 1.9.888m2.691-2.671a5.5 5.5 0 001.85-.098M15.356 14.93A5.501 5.501 0 0012.505 16m.315-5.29a5.501 5.501 0 00-1.172-.198c-.265.005-.529.025-.791.079"></path></svg>,
    delay: ".9s"
  },
];

const Index2 = () => {
  return (
    <>
      <Layout>
        <section className="relative pt-20 items-center flex">
          <div
            className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0"
            style={{ "z-index": "-1" }}
          ></div>
          <div className="container">
            <div className="flex flex-wrap items-center -mx-3">
              <div className="w-full lg:w-1/2 px-3">
                <div className="py-12">
                  <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                    <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                      Committed to <span className="text-blue-500">People</span>{" "}
                      and the future
                    </h2>
                    <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                      We are{" "}
                      <strong className="text-blue-500">Perpetualtech</strong>,
                      a Creative Design{" "}
                      <span className="typewrite d-inline text-brand">
                        <TextEffect
                          text1="Web Agency"
                          text2="Social Marketing"
                        />
                      </span>
                    </p>
                    <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn mt-3 text-sm">
                      Helping you maximize operations management with
                      digitization
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <a
                      className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animated animate__fadeIn"
                      href="#key-features"
                    >
                      Key Features
                    </a>
                    <a
                      className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animated animate__fadeIn"
                      data-wow-delay=".3s"
                      href="#how-we-work"
                    >
                      How We Work?
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10 pt-12">
                <div className="flex items-center justify-center">
                  <img
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/hero.svg"
                    alt="Monst"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-16 pb-20" id="key-features">
          <div className="container">
            <div className="flex flex-wrap items-center mb-12">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  <span>Saas Solutions for </span>
                  <br />
                  <span className="text-blue-600">your Business </span>
                  <span>
                    Grow <br />
                    on time
                  </span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 h-full bg-red-100">
           {features.map((feature, index) => (
        <div key={index} className="w-full md:w-1/2 lg:w-1/4 px-3 mb-6">
          <div className="border border-gray-100 pt-8 px-6 pb-6 bg-white text-center rounded shadow hover:shadow-lg hover-up-2 transition duration-500 wow animate__animated animate__fadeIn" data-wow-delay={feature.delay}>
            <div className="text-blue-500 mx-auto mb-4">
              {feature.icon}
            </div>
            <h3 className="mb-2 font-bold font-heading">{feature.title}</h3>
            <p className="text-sm text-blueGray-400">{feature.description}</p>
          </div>
        </div>
      ))}
            </div>
          </div>
        </section>
        <section className="py-20" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap -mx-8">
              <div className="w-full lg:w-1/2 px-8">
                <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                  <h2
                    className="mb-4 text-3xl lg:text-4xl font-bold font-heading max-w-md wow animate__animated animate__fadeIn"
                    data-wow-delay=".1s"
                  >
                    Great Things In Business Are{" "}
                    <span className="text-blue-600">Never Done</span> By One
                    Person.
                  </h2>
                  <Link href="/services">
                    <a
                      className="inline-block text-xs py-4 px-8 text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded hover-up-2 wow animate__animated animate__fadeIn"
                      data-wow-delay=".5s"
                    >
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-8">
                <ul className="space-y-12">
                  <li
                    className="flex -mx-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".3s"
                  >
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        1
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Project Initialization
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        The Initiation Phase of a project is when the Project
                        Sponsor and Vice Chancellor/Chief Information Officer
                        define, evaluate, and approve the project idea.
                      </p>
                    </div>
                  </li>
                  <li
                    className="flex -mx-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".5s"
                  >
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        2
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Looking for Creative
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        We can solve problems more openly and innovatively when
                        we are creative.
                      </p>
                    </div>
                  </li>
                  <li
                    className="flex -mx-4 wow animate__animated animate__fadeIn"
                    data-wow-delay=".7s"
                  >
                    <div className="px-4">
                      <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
                        3
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Market Development
                      </h3>
                      <p className="text-blueGray-400 leading-loose">
                        Market development strategies help businesses grow and
                        reach new customers in a planned, structured manner.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20">
          <div className="container">
            <div className="flex flex-wrap -mx-3">
              <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                <div className="max-w-md lg:max-w-xs mx-auto lg:ml-0 mb-6 lg:mb-0">
                  <h2
                    className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    Simple Solution for{" "}
                    <span className="text-blue-500">Complex</span> Connections
                  </h2>
                </div>
                <div
                  className="lg:absolute lg:bottom-0 lg:left-0 flex justify-center wow animate__animated animate__fadeIn"
                  data-wow-delay=".5s"
                >
                  <div id="carausel-fade-1-arrows" className="flex"></div>
                </div>
              </div>
              <div
                className="w-full lg:w-2/3 flex flex-wrap px-3 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="relative w-full rounded">
                  <div
                    className="carausel-fade slick-carausel rounded"
                    id="carausel-fade-1"
                  >
                    <Slider2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl lg:max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <h2
                  className="text-4xl font-bold font-heading wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".1s"
                >
                  Get in touch!
                </h2>
                <p
                  className="text-blueGray-400 wow animate__animated animate__fadeIn animated"
                  data-wow-delay=".5s"
                >
                  We will be glad to hear from you
                </p>
              </div>
              {/* <div className="flex flex-wrap -mx-3 text-center">
                                <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-400">Phone</span>
                                        <p>+ 48 654-430-309</p>
                                        <p>+ 1 6532-430-309</p>
                                    </div>
                                </div>
                                <div className="w-1/2 lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-400">E-mail</span>
                                        <p>contact@Perpetualtech.com</p>
                                        <p>pat@example.com</p>
                                    </div>
                                </div>
                                <div className="w-full lg:w-1/3 px-3 mb-12 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                                    <svg className="mb-6 h-8 w-8 mx-auto text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                    <div className="leading-relaxed">
                                        <span className="text-sm text-blueGray-400">Address</span>
                                        <p>11567 E Broadview Dr</p>
                                        <p>Colorado(CO), 80117</p>
                                    </div>
                                </div>
                            </div> */}
              <div>
                <form>
                  <div
                    className="flex flex-wrap mb-4 -mx-3 wow animate__animated animate__fadeIn animated"
                    data-wow-delay=".3s"
                  >
                    <div className="w-full lg:w-1/2 px-3 mb-4 lg:mb-0">
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                      <textarea
                        className="w-full h-full p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                        placeholder="Message..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <label>
                      <input
                        className="mr-1"
                        type="checkbox"
                        name="terms"
                        value="1"
                      />
                      <span className="text-sm font-semibold">
                        I agree to terms and conditions.
                      </span>
                    </label>
                    <button
                      className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index2;
