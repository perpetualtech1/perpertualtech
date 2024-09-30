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
                    <h2 className="font-heading wow animate__animatedanimated animate__fadeIn mb-4 text-3xl font-bold lg:text-5xl">
                      Committed to <span className="text-blue-500">People</span>
                      , and the future
                    </h2>
                    <p className="wow animate__animatedanimated animate__fadeIn leading-relaxed text-blueGray-400">
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
                    <p className="wow animate__animatedanimated animate__fadeIn leading-relaxed mt-3 text-sm text-blueGray-400">
                      Helping you maximize operations management with
                      digitization
                    </p>
                  </div>
                  <div className="text-center lg:text-left">
                    <Link href="/about">
                      <a className="hover-up-2 wow animate__animatedanimated animate__fadeIn leading-none mb-4 block rounded bg-blue-400 px-8 py-4 text-center text-xs font-semibold tracking-wide text-white hover:bg-blue-500 sm:mb-0 sm:mr-3 sm:inline-block">
                        About Us
                      </a>
                    </Link>
                    <Link href="/services">
                      <a
                        className="hover-up-2 wow animate__animatedanimated animate__fadeIn leading-none block rounded border border-blueGray-200 bg-white px-8 py-4 text-center text-xs font-semibold text-blueGray-500 hover:border-blueGray-300 hover:text-blueGray-600 sm:inline-block"
                        data-wow-delay=".3s"
                      >
                        Our Services
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="lg:bg-blueGray-10 mb-12 w-full px-3 pb-10 lg:mb-0 lg:w-1/2">
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

export default Contact;
