import React, { useRef, useState } from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
import CounterUp from "../components/elements/Counterup";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const About = () => {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent!");
        },
        (error) => {
          console.log(error.text);
        }
      );

    console.log(form.current.value);
    setFormSubmitted(true);
  };
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
                    <h2 className="font-heading wow animate__animated animated animate__fadeIn mb-4 text-3xl font-bold lg:text-5xl">
                      Get to know about us and{" "}
                      <span className="text-blue-500">relive</span> our journey
                    </h2>
                    <p className="wow animate__animated animated animate__fadeIn leading-relaxed mt-3 text-sm text-blueGray-400">
                      Get acquainted with our team and understand how we work
                      and proceed towards sucess.{" "}
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <Link href="/services">
                      <a className="hover-up-2 wow animate__animatedanimated animate__fadeIn leading-none mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold tracking-wide text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block">
                        Our Services
                      </a>
                    </Link>
                    <Link href="#how-we-work">
                      <a
                        className="hover-up-2 wow animate__animatedanimated animate__fadeIn leading-none block rounded border border-blueGray-200 bg-white px-8 py-4 text-center text-xs font-semibold text-blueGray-500 hover:border-blueGray-300 hover:text-blueGray-600 sm:inline-block"
                        data-wow-delay=".3s"
                      >
                        How We Work?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full px-3 pb-10 lg:mb-0 lg:w-1/2 lg:bg-blueGray-100">
                <div className="flex items-center justify-center">
                  <img
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/about.svg"
                    alt="Monst"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blueGray-50 py-20" id="how-we-work">
          <div className="container">
            <div className="mb-12 flex max-w-2xl flex-wrap items-center justify-between lg:max-w-full">
              <div className="mb-4 w-full lg:mb-0 lg:w-1/2">
                <h2 className="font-heading wow animate__animatedanimated animate__fadeInDown text-3xl font-bold md:text-4xl">
                  <span>We are </span>
                  <span className="text-blue-500">awesome team </span>
                  <br />
                  <span>for your business dream</span>
                </h2>
              </div>
            </div>
            <div className="-mx-3 -mb-6 flex flex-wrap text-center">
              <div
                className="hover-up-5 wow animate__animated animate__fadeIn mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
                data-wow-delay=".3s"
              >
                <div className="rounded bg-white p-12 shadow">
                  <div className="font-heading mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-800">
                    1
                  </div>
                  <img
                    className="mx-auto my-4 h-36"
                    src="/assets/imgs/illustrations/about.svg"
                    alt="Monst"
                  />
                  <h3 className="font-heading mb-2 text-xl font-bold">
                    Project Initialization
                  </h3>
                  <p className="leading-relaxed text-sm text-blueGray-400">
                    Project initiation ensures that you lay a strong foundation
                    for a new project in your company our team.
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 wow animate__animated animate__fadeIn mb-6 w-full px-3 md:w-1/2 lg:w-1/3"
                data-wow-delay=".5s"
              >
                <div className="rounded bg-white p-12 shadow">
                  <div className="font-heading mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-800">
                    2
                  </div>
                  <img
                    className="mx-auto my-4 h-36"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="Monst"
                  />
                  <h3 className="font-heading mb-2 text-xl font-bold">
                    Project planning
                  </h3>
                  <p className="leading-relaxed text-sm text-blueGray-400">
                    A project plan is essential to keep everything related to
                    the project organized, methodical, and on track.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 mb-6 w-full px-3 lg:w-1/3">
                <div
                  className="wow animate__animated animate__fadeIn rounded bg-white p-12 shadow"
                  data-wow-delay=".7s"
                >
                  <div className="font-heading mx-auto flex size-12 items-center justify-center rounded-full bg-blue-200 font-bold text-blue-800">
                    3
                  </div>
                  <img
                    className="mx-auto my-4 h-36"
                    src="/assets/imgs/illustrations/tasks.svg"
                    alt="Monst"
                  />
                  <h3 className="font-heading mb-2 text-xl font-bold">
                    Project organization
                  </h3>
                  <p className="leading-relaxed text-sm text-blueGray-400">
                    Moving forward you will be able to keep yourself and your
                    team on track, and address challenges early.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="py-20">
                    <div className="container text-center">
                        <div className="max-w-lg mx-auto mb-16">
                            <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl"> About Our Expert</span>
                            <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                                Entrust Your Project To Our <span className="text-blue-500"> Specialists </span>
                            </h2>
                            <p className="text-blueGray-400 leading-loose">Our IT services converge business and technology experts to help to manage business categories</p>
                        </div>
                        <div className="flex flex-wrap -mx-5">
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                    <p className="text-gray-500 text-xs mt-3">CEO, Co Founders</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                                    <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                                    <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                                </div>
                            </div>
                            <div className="w-1/2 lg:w-1/4 px-5 mb-12">
                                <div className="hover-up-5 pt-8 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                    <img className="mb-6 h-24 w-24 mx-auto rounded-full object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                                    <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                                    <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        <section className="pb-20 pt-16">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-8 max-w-md">
                <span
                  className="wow animate__animatedanimated animate__fadeIn inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600"
                  data-wow-delay=".1s"
                >
                  Contact Us
                </span>
                <h2
                  className="font-heading wow animate__animatedanimated animate__fadeIn mt-2 text-4xl font-bold"
                  data-wow-delay=".s"
                >
                  We will <span className="text-blue-500">be glad</span> to hear
                  from you!
                </h2>
              </div>
              <div>
                {/* Form */}
                {!formSubmitted ? (
                  <form ref={form} onSubmit={sendEmail}>
                    <div
                      className="wow animate__animatedanimated animate__fadeIn mb-4"
                      data-wow-delay=".3s"
                    >
                      <input
                        className="leading-none w-full rounded bg-blueGray-50 p-4 text-xs font-semibold outline-none"
                        type="text"
                        placeholder="Name"
                        required
                        name="user_name"
                      />
                    </div>

                    <div
                      className="wow animate__animatedanimated animate__fadeIn mb-4"
                      data-wow-delay=".3s"
                    >
                      <input
                        className="leading-none w-full rounded bg-blueGray-50 p-4 text-xs font-semibold outline-none"
                        type="email"
                        placeholder="name@email.com"
                        required
                        name="user_email"
                      />
                    </div>
                    <div
                      className="wow animate__animatedanimated animate__fadeIn mb-4"
                      data-wow-delay=".3s"
                    >
                      <textarea
                        className="leading-none h-24 w-full resize-none rounded bg-blueGray-50 p-4 text-xs font-semibold outline-none"
                        placeholder="Message..."
                        required
                        name="message"
                      ></textarea>
                    </div>
                    <div
                      className="wow animate__animatedanimated animate__fadeIn mb-4"
                      data-wow-delay=".3s"
                    ></div>
                    <div
                      className="wow animate__animatedanimated animate__fadeIn flex items-center justify-between"
                      data-wow-delay=".3s"
                    >
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
                      />

                      <button
                        className="leading-none rounded bg-blue-500 px-8 py-4 text-sm font-semibold text-white hover:bg-blue-700"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <p className="mx-auto py-10 text-center text-xl font-bold">
                    We got your response! 😄
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
