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
                    <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                      Get to know about us and{" "}
                      <span className="text-blue-500">relive</span> our journey
                    </h2>
                    <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                      Get acquainted with our team and understand how we work
                      and proceed towards sucess.{" "}
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <Link href="/services">
                      <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">
                        Our Services
                      </a>
                    </Link>
                    <Link href="#how-we-work">
                      <a
                        className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn"
                        data-wow-delay=".3s"
                      >
                        How We Work?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
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

        <section className="py-20 bg-blueGray-50" id="how-we-work">
          <div className="container">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
              <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeInDown">
                  <span>We are </span>
                  <span className="text-blue-500">awesome team </span>
                  <br />
                  <span>for your business dream</span>
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".3s"
              >
                <div className="p-12 bg-white shadow rounded">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    1
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/about.svg"
                    alt="Monst"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Project Initialization
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    Project initiation ensures that you lay a strong foundation
                    for a new project in your company our team.
                  </p>
                </div>
              </div>
              <div
                className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn"
                data-wow-delay=".5s"
              >
                <div className="p-12 bg-white shadow rounded">
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    2
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/space.svg"
                    alt="Monst"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Project planning
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
                    A project plan is essential to keep everything related to
                    the project organized, methodical, and on track.
                  </p>
                </div>
              </div>
              <div className="hover-up-5 w-full lg:w-1/3 px-3 mb-6">
                <div
                  className="p-12 bg-white shadow rounded wow animate__animated animate__fadeIn"
                  data-wow-delay=".7s"
                >
                  <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">
                    3
                  </div>
                  <img
                    className="h-36 mx-auto my-4"
                    src="/assets/imgs/illustrations/tasks.svg"
                    alt="Monst"
                  />
                  <h3 className="mb-2 font-bold font-heading text-xl">
                    Project organization
                  </h3>
                  <p className="text-sm text-blueGray-400 leading-relaxed">
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
            <div className="max-w-2xl mx-auto text-center">
              <div className="max-w-md mb-8 mx-auto">
                <span
                  className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn"
                  data-wow-delay=".1s"
                >
                  Contact Us
                </span>
                <h2
                  className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn"
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
                      className="mb-4 wow animate__animatedanimated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <input
                        className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="text"
                        placeholder="Name"
                        required
                        name="user_name"
                      />
                    </div>

                    <div
                      className="mb-4 wow animate__animatedanimated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <input
                        className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none"
                        type="email"
                        placeholder="name@email.com"
                        required
                        name="user_email"
                      />
                    </div>
                    <div
                      className="mb-4 wow animate__animatedanimated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <textarea
                        className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none"
                        placeholder="Message..."
                        required
                        name="message"
                      ></textarea>
                    </div>
                    <div
                      className="mb-4 wow animate__animatedanimated animate__fadeIn"
                      data-wow-delay=".3s"
                    ></div>
                    <div
                      className="flex justify-between items-center wow animate__animatedanimated animate__fadeIn"
                      data-wow-delay=".3s"
                    >
                      <ReCAPTCHA
                        sitekey={process.env.NEXT_PUBLIC_CAPTCHA_KEY}
                      />

                      <button
                        className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                ) : (
                  <p className="text-center mx-auto text-xl py-10 font-bold">
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
