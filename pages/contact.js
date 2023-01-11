import Layout from "../components/layout/Layout";
import TextEffect from "../components/elements/TextEffect";
import Link from "next/link";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
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
                      Committed to <span className="text-blue-500">People</span>
                      , and the future
                    </h2>
                    <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
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
                    <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">
                      Helping you maximize operations management with
                      digitization
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <Link href="/about">
                      <a className="tracking-wide hover-up-2 block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded wow animate__animatedanimated animate__fadeIn">
                        About Us
                      </a>
                    </Link>
                    <Link href="/services">
                      <a
                        className="block hover-up-2 sm:inline-block py-4 px-8 text-xs text-blueGray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-white border border-blueGray-200 hover:border-blueGray-300 rounded wow animate__animatedanimated animate__fadeIn"
                        data-wow-delay=".3s"
                      >
                        Our Services
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                <div className="flex items-center justify-center">
                  <img
                    className="lg:max-w-lg"
                    src="/assets/imgs/illustrations/contact.svg"
                    alt="Monst"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-20">
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

export default Contact;
