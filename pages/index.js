import Image from "next/image";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import React from "react";
import Slider2 from "../components/slider/Slider2";
import TextEffect from "../components/elements/TextEffect";
import aiDataAnalysis from "../public/assets/imgs/icons/ai-data-analysis.svg";
import aiTravelEngine from "../public/assets/imgs/icons/ai-travel-engine.svg";
import briefCase from "../public/assets/imgs/icons/brief-case.svg";
import machineLearning from "../public/assets/imgs/icons/machine-learning.svg";
import piechart from "../public/assets/imgs/icons/pie-chart.svg";
import predictAnalytics from "../public/assets/imgs/icons/predict-analytics.svg";
import settings from "../public/assets/imgs/icons/settings.svg";
import taxGpt from "../public/assets/imgs/icons/taxGpt.webp";
import trend from "../public/assets/imgs/icons/trend.svg";

const features = [
  {
    title: "IT Consultancy",
    description:
      "We analyze customer requirements and business objectives, offering strategic advice on how to use AI-driven technology to achieve goals. In collaboration with our in-house AI-enhanced technical team, we manage IT initiatives.",
    icon: settings,
    delay: ".3s",
  },
  {
    title: "Web Development",
    description:
      "Our solutions combine design excellence with AI-powered innovation to contribute greatly to your brand value while meeting your business needs. With everything we provide, you can gain both long-term and short-term investment gains.",
    icon: briefCase,
    delay: ".5s",
  },
  {
    title: "App Development",
    description:
      "We specialize in Custom Application Development worldwide and have a proven track record of creating, integrating, and assisting enterprise-class AI-driven software products.",
    icon: trend,
    delay: ".7s",
  },
  {
    title: "Digital Marketing",
    description:
      "We offer a variety of marketing services that businesses do not typically have in-house expertise for. Using AI analytics, our ultimate objective is to help you increase sales through our efforts.",
    icon: piechart,
    delay: ".9s",
  },
  {
    title: "TaxGPT",
    description:
      "We build intelligent chatbots that seamlessly integrate with TaxGPT to mimic human interactions, providing 24/7 support to your customers and enhancing user engagement while simplifying tax calculations and reporting.",
    icon: taxGpt,
    delay: ".3s",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "We integrate machine learning algorithms to analyze complex data, forecast trends, and provide actionable insights.",
    icon: machineLearning,
    delay: ".5s",
  },
  {
    title: "AI Data Analysis",
    description:
      "Utilize AI algorithms to parse through complex datasets, extracting meaningful insights that drive business intelligence and strategy.",
    icon: aiDataAnalysis,
    delay: ".7s",
  },
  // {
  //   title: "Predictive Analytics",
  //   description:
  //     "Our predictive analytics solutions help businesses anticipate future outcomes based on historical data using advanced machine learning models.",
  //   icon: predictAnalytics,
  //   delay: ".9s",
  // },
  {
    title: "TravelEngine AI",
    description:
      "TravelEngine provides AI-powered bespoke travel solutions, offering fast and intelligent recommendations tailored to your taste. Find the best dining spots and get personalized travel itineraries.",
    icon: aiTravelEngine,
    delay: ".9s",
  },
];

const Features = () => {
  return (
    <>
      <Layout>
        <section className="relative flex items-center pt-20">
          <div
            className="absolute inset-0 z-0 ml-auto hidden w-1/2 bg-blueGray-100 lg:block"
            style={{ "zIndex": "-1" }}
          ></div>
          <div className="container">
            <div className="-mx-3 flex flex-wrap items-center">
              <div className="w-full px-3 lg:w-1/2">
                <div className="py-12">
                  <div className="mx-auto mb-8 max-w-lg text-center lg:mx-0 lg:max-w-md lg:text-left">
                    <h2 className="font-heading wow animate__animated animate__fadeIn mb-4 text-3xl font-bold lg:text-5xl">
                      Committed to <span className="text-blue-500">People</span>{" "}
                      and the future
                    </h2>
                    <p className="wow animate__animated animate__fadeIn leading-relaxed text-blueGray-400">
                      We are{" "}
                      <strong className="text-blue-500">Perpetualtech</strong>,
                      a Creative Design{" "}
                      <span className="typewrite text-brand inline">
                        <TextEffect
                          text1="Web Agency"
                          text2="Social Marketing"
                        />
                      </span>
                    </p>
                    <p className="wow animate__animated animate__fadeIn leading-relaxed mt-3 text-sm text-blueGray-400">
                      Helping you maximize operations management with
                      digitization
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <a
                      className="hover-up-2 wow animate__animated animate__fadeIn leading-none mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold tracking-wide text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block"
                      href="#key-features"
                    >
                      Key Features
                    </a>
                    <a
                      className="hover-up-2 wow animate__animated animate__fadeIn leading-none block rounded border border-blueGray-200 bg-white px-8 py-4 text-center text-xs font-semibold text-blueGray-500 hover:border-blueGray-300 hover:text-blueGray-600 sm:inline-block"
                      data-wow-delay=".3s"
                      href="#how-we-work"
                    >
                      How We Work?
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full px-3 pb-10 pt-12 lg:mb-0 lg:w-1/2 lg:bg-blueGray-100">
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
        <section className="pb-20 pt-16" id="key-features">
          <div className="container">
            <div className="mb-12 flex flex-wrap items-center">
              <div className="mb-6 w-full lg:mb-0 lg:w-1/2">
                <h2
                  className="font-heading wow animate__animated animate__fadeIn text-4xl font-bold"
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
            <div className="-m-3 grid h-full grid-cols-1 gap-4 p-3 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="hover-up-2 wow animate__animated animate__fadeIn rounded border border-gray-100 bg-white px-6 pb-6 pt-8 text-center shadow transition duration-500 hover:shadow-lg"
                  data-wow-delay={feature.delay}
                >
                  <div className="mx-auto mb-4 text-blue-500">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      height={48}
                      width={48}
                    />
                  </div>
                  <h3 className="font-heading mb-2 font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blueGray-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-20" id="how-we-work">
          <div className="container">
            <div className="-mx-8 flex flex-wrap">
              <div className="w-full px-8 lg:w-1/2">
                <div className="mb-12 border-b pb-12 lg:mb-0 lg:border-b-0 lg:pb-0">
                  <h2
                    className="font-heading wow animate__animated animate__fadeIn mb-4 max-w-md text-3xl font-bold lg:text-4xl"
                    data-wow-delay=".1s"
                  >
                    Great Things In Business Are{" "}
                    <span className="text-blue-600">Never Done</span> By One
                    Person.
                  </h2>
                  <Link href="/services">
                    <a
                      className="hover-up-2 wow animate__animated animate__fadeIn leading-none inline-block rounded bg-blue-400 px-8 py-4 text-xs font-semibold text-white hover:bg-blue-500"
                      data-wow-delay=".5s"
                    >
                      Learn More
                    </a>
                  </Link>
                </div>
              </div>
              <div className="w-full px-8 lg:w-1/2">
                <ul className="space-y-12">
                  <li
                    className="wow animate__animated animate__fadeIn -mx-4 flex"
                    data-wow-delay=".3s"
                  >
                    <div className="px-4">
                      <span className="font-heading mx-auto flex size-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-600">
                        1
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Project Initialization
                      </h3>
                      <p className="leading-loose text-blueGray-400">
                        The Initiation Phase of a project is when the Project
                        Sponsor and Vice Chancellor/Chief Information Officer
                        define, evaluate, and approve the project idea.
                      </p>
                    </div>
                  </li>
                  <li
                    className="wow animate__animated animate__fadeIn -mx-4 flex"
                    data-wow-delay=".5s"
                  >
                    <div className="px-4">
                      <span className="font-heading mx-auto flex size-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-600">
                        2
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Looking for Creative
                      </h3>
                      <p className="leading-loose text-blueGray-400">
                        We can solve problems more openly and innovatively when
                        we are creative.
                      </p>
                    </div>
                  </li>
                  <li
                    className="wow animate__animated animate__fadeIn -mx-4 flex"
                    data-wow-delay=".7s"
                  >
                    <div className="px-4">
                      <span className="font-heading mx-auto flex size-16 items-center justify-center rounded-full bg-blue-50 text-2xl font-bold text-blue-600">
                        3
                      </span>
                    </div>
                    <div className="px-4">
                      <h3 className="my-4 text-xl font-semibold">
                        Market Development
                      </h3>
                      <p className="leading-loose text-blueGray-400">
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
            <div className="-mx-3 flex flex-wrap">
              <div className="relative mb-8 w-full text-center lg:mb-0 lg:w-1/3 lg:text-left">
                <div className="mx-auto mb-6 max-w-md lg:mb-0 lg:ml-0 lg:max-w-xs">
                  <h2
                    className="font-heading wow animate__animated animate__fadeIn animated mb-4 text-3xl font-bold md:text-4xl"
                    data-wow-delay=".3s"
                  >
                    Simple Solution for{" "}
                    <span className="text-blue-500">Complex</span> Connections
                  </h2>
                </div>
                <div
                  className="wow animate__animated animate__fadeIn flex justify-center lg:absolute lg:bottom-0 lg:left-0"
                  data-wow-delay=".5s"
                >
                  <div id="carausel-fade-1-arrows" className="flex"></div>
                </div>
              </div>
              <div
                className="wow animate__animated animate__fadeIn flex w-full flex-wrap px-3 lg:w-2/3"
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
            <div className="mx-auto max-w-2xl lg:max-w-3xl">
              <div className="mb-12 text-center">
                <h2
                  className="font-heading wow animate__animated animate__fadeIn animated text-4xl font-bold"
                  data-wow-delay=".1s"
                >
                  Get in touch!
                </h2>
                <p
                  className="wow animate__animated animate__fadeIn animated text-blueGray-400"
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
                    className="wow animate__animated animate__fadeIn animated -mx-3 mb-4 flex flex-wrap"
                    data-wow-delay=".3s"
                  >
                    <div className="mb-4 w-full px-3 lg:mb-0 lg:w-1/2">
                      <div className="mb-4">
                        <input
                          className="leading-none w-full rounded bg-blueGray-50 p-4 text-xs font-semibold outline-none"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="leading-none w-full rounded bg-blueGray-50 p-4 text-xs font-semibold outline-none"
                          type="text"
                          placeholder="Name"
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          className="leading-none w-full rounded bg-blueGray-50 p-4 text-xs font-semibold outline-none"
                          type="email"
                          placeholder="name@example.com"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 lg:w-1/2">
                      <textarea
                        className="leading-none size-full resize-none rounded bg-blueGray-50 p-4 text-xs font-semibold outline-none"
                        placeholder="Message..."
                      ></textarea>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
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
                      className="leading-none rounded bg-blue-400 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-500"
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

export default Features;
