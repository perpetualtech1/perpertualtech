import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";

const BlogSingle = () => {
  return (
    <>
      <Layout>
        <section className="pb-20">
          <div
            className="mb-12 bg-cover bg-no-repeat pb-8 pt-20"
            style={{
              backgroundImage: "url('assets/imgs/placeholders/img-14.jpg')",
            }}
          >
            <div className="container">
              <div className="mx-auto max-w-2xl">
                <div className="mb-6 text-center">
                  <span className="text-base md:text-lg">
                    <Link href="/blog">
                      <a className="text-blueGray-200 hover:underline">
                        <span className="mr-3 inline-block rounded-xl bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                          Bussiness
                        </span>
                      </a>
                    </Link>
                    <span className="text-sm text-blueGray-200">
                      24 Jan, 2021
                    </span>
                  </span>
                  <h2 className="font-heading mt-4 text-4xl font-bold text-white md:text-5xl">
                    Best Tailwind CSS template for your SASS landing site
                  </h2>
                </div>
                <div className="mb-8 flex justify-center">
                  <img
                    className="size-12 rounded-full object-cover"
                    src="/assets/imgs/placeholders/avatar-8.png"
                    alt="Monst"
                  />
                  <div className="pl-4">
                    <p className="mb-1 text-blueGray-100">Alice Bradley</p>
                    <p className="text-xs font-semibold text-blueGray-200">
                      Co Founders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="mx-auto max-w-2xl">
              <p
                className="wow animate__animated animate__fadeIn animated leading-loose mb-6 text-blueGray-400"
                data-wow-delay=".1s"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent commodo est eget consequat imperdiet. Suspendisse
                laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla
                at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum
                convallis. Suspendisse id nunc maximus, suscipit nte ac,
                vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum
                elit. Nullam laoreet mollis dictum. Ut suscipit, magna at
                elementum iaculis, erat erat fermentum justo, sit amet ultrices
                enim leo sit amet purus. Nulla sed erat molestie, auctor mauris
                lobortis, iaculis justo.
              </p>
              <div
                className="wow animate__animated animate__fadeIn animated mx-auto w-full px-12 pb-10 pt-5"
                data-wow-delay=".1s"
              >
                <div className="mb-6 w-full border-l-4 border-gray-100">
                  <p className="px-5 text-lg text-gray-600">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nam obcaecati laudantium recusandae, debitis eum voluptatem
                    ad, illo voluptatibus temporibus odio provident.
                  </p>
                </div>
                <div className="w-full pl-6">
                  <p className="text-md font-bold text-indigo-500">
                    Scott Windon
                  </p>
                  <p className="text-xs text-gray-500">@scott.windon</p>
                </div>
              </div>
              <p
                className="wow animate__animated animate__fadeIn animated leading-loose mb-6 text-blueGray-400"
                data-wow-delay=".1s"
              >
                Duis hendrerit dui in dui ornare luctus. Nullam gravida
                tincidunt lorem cursus suscipit. Integer scelerisque sem et sem
                porta, eu volutpat mi tempor. Duis interdum sodales lacus non
                tempor. Nam mattis, sapien a commodo ultrices, nunc orci
                tincidunt ante, tempus tempus turpis metus laoreet lacus.
                Praesent condimentum, arcu ut fringilla tincidunt, augue diam
                pretium augue, sit amet vestibulum nunc felis vel metus. Duis
                dolor nulla, pellentesque non ultrices ut, convallis eu felis.
                Duis luctus tempor arcu, vitae elementum massa porta non. Morbi
                aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut
                dictum lacus neque in urna. Nam metus elit, ullamcorper pretium
                nisi at, aliquet gravida lectus. Nullam id lectus pellentesque,
                suscipit dolor eget, consequat velit. Pellentesque finibus
                commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut
                sagittis nunc maximus ut.
              </p>
              <p
                className="wow animate__animated animate__fadeIn animated leading-loose text-blueGray-400"
                data-wow-delay=".1s"
              >
                Duis dolor nulla, pellentesque non ultrices ut, convallis eu
                felis. Duis luctus tempor arcu, vitae elementum massa porta non.
                Morbi aliquet, neque ut volutpat sodales, dui enim facilisis
                enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper
                pretium nisi at, aliquet gravida lectus. Nullam id lectus
                pellentesque, suscipit dolor eget, consequat velit. Pellentesque
                finibus commodo nisl, id interdum leo. Maecenas aliquam felis
                justo, ut sagittis nunc maximus ut.
              </p>
              <a
                href="#"
                target="_blank"
                className="wow animate__animated animate__fadeIn animated mt-8 inline-flex items-center text-gray-600 hover:underline dark:text-gray-200"
                data-wow-delay=".1s"
              >
                <svg viewBox="0 0 512 512" className="size-6 fill-current">
                  <title>Logo Twitter</title>
                  <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                </svg>
                <span className="mx-2">Share on twitter</span>
              </a>

              <div className="my-12 flex flex-wrap">
                <div className="w-full">
                  <div
                    className="hover-up-5 wow animate__animated animate__fadeIn animated rounded border border-gray-100 bg-white px-6 py-10 shadow hover:border-gray-200"
                    data-wow-delay=".1s"
                  >
                    <div className="mb-4 flex items-center">
                      <img
                        className="size-16 rounded-full object-cover"
                        src="/assets/imgs/placeholders/avatar-1.png"
                        alt="Monst"
                      />
                      <div className="pl-4">
                        <strong className="text-md mb-1 mt-6">
                          Geraldine Tusoy
                        </strong>
                        <p className="mt-3 text-xs">CEO, Co Founders</p>
                      </div>
                    </div>
                    <p className="leading-loose mb-5 text-sm">
                      Donec consequat tortor risus, at auctor felis consequat a.
                      Donec quis dolor sem. Sed sollicitudin magna in hendrerit
                      pulvinar. Vestibulum non quam velit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mx-auto max-w-screen-sm antialiased">
                <h3 className="mb-6 text-3xl font-semibold text-gray-900">
                  Comments
                </h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="mr-3 shrink-0">
                      <img
                        className="mt-2 size-8 rounded-full sm:size-10"
                        src="/assets/imgs/placeholders/avatar-2.png"
                        alt="Monst"
                      />
                    </div>
                    <div className="leading-relaxed flex-1 rounded-lg border border-gray-100 px-4 py-2 sm:px-6 sm:py-4">
                      <strong>Kolawole</strong>
                      <span className="text-xs text-gray-400">3:34 PM</span>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                      <div className="mt-4 flex items-center">
                        <div className="mr-2 flex -space-x-2">
                          <img
                            className="size-6 rounded-full border border-white"
                            src="/assets/imgs/placeholders/avatar-3.png"
                            alt="Monst"
                          />
                          <img
                            className="size-6 rounded-full border border-white"
                            src="/assets/imgs/placeholders/avatar-4.png"
                            alt="Monst"
                          />
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                          5 Replies
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="mr-3 shrink-0">
                      <img
                        className="mt-2 size-8 rounded-full sm:size-10"
                        src="/assets/imgs/placeholders/avatar-5.png"
                        alt="Monst"
                      />
                    </div>
                    <div className="leading-relaxed flex-1 rounded-lg border border-gray-100 px-4 py-2 sm:px-6 sm:py-4">
                      <strong>Fulton</strong>
                      <span className="text-xs text-gray-400">3:34 PM</span>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                      </p>
                      <h4 className="my-5 text-xs font-bold uppercase tracking-wide text-gray-400">
                        Replies
                      </h4>
                      <div className="space-y-4">
                        <div className="flex">
                          <div className="mr-3 shrink-0">
                            <img
                              className="mt-3 size-6 rounded-full sm:size-8"
                              src="/assets/imgs/placeholders/avatar-6.png"
                              alt="Monst"
                            />
                          </div>
                          <div className="leading-relaxed flex-1 rounded-lg bg-gray-50 px-4 py-2 sm:px-6 sm:py-4">
                            <strong>Clara </strong>
                            <span className="text-xs text-gray-400">
                              3:34 PM
                            </span>
                            <p className="text-xs sm:text-sm">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="mr-3 shrink-0">
                            <img
                              className="mt-3 size-6 rounded-full sm:size-8"
                              src="/assets/imgs/placeholders/avatar-7.png"
                              alt="Monst"
                            />
                          </div>
                          <div className="leading-relaxed flex-1 rounded-lg bg-gray-50 px-4 py-2 sm:px-6 sm:py-4">
                            <strong>Dany </strong>
                            <span className="text-xs text-gray-400">
                              3:34 PM
                            </span>
                            <p className="text-xs sm:text-sm">
                              Lorem ipsum dolor sit amet, consetetur sadipscing
                              elitr, sed diam nonumy eirmod tempor invidunt ut
                              labore et dolore magna aliquyam erat, sed diam
                              voluptua.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-4 mt-12">
                <form className="w-full max-w-xl rounded-lg bg-white">
                  <div className="mb-6 flex flex-wrap">
                    <h2 className="pb-2 pt-3 text-lg font-bold text-gray-800">
                      Add a new comment
                    </h2>
                    <div className="my-2 w-full md:w-full">
                      <textarea
                        className="leading-normal h-32 w-full resize-none rounded border border-gray-100 bg-gray-100 px-3 py-4 text-sm focus:bg-white focus:outline-none"
                        name="body"
                        placeholder="Type Your Comment"
                        required
                      ></textarea>
                    </div>
                    <div className="flex w-full items-start px-1 md:w-full">
                      <div className="mr-auto flex w-1/2 items-start px-2 text-gray-700">
                        <svg
                          fill="none"
                          className="mr-1 size-5 text-gray-600"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <p className="pt-px text-xs md:text-xs">
                          Some HTML is okay.
                        </p>
                      </div>
                    </div>
                    <button className="leading-none mt-6 block rounded bg-blue-500 p-4 text-center text-xs font-semibold text-white transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-blue-700">
                      Post Comment
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-12 flex items-center justify-center transition duration-300 ease-in-out hover:-translate-y-1">
                <Link href="/blog">
                  <a className="mt-2 rounded-lg border border-gray-100 px-4 py-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 focus:outline-none dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-700">
                    {" "}
                    Read More Articles{" "}
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-blue-500 py-20">
          <div className="container">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-heading mb-4 text-3xl font-bold text-white lg:text-3xl">
                <span>Subscribe now to </span>
                <span className="text-blue-200">Our Newsletter</span> <br />
                <span>and get the Coupon code.</span>
              </h2>
              <p className="mb-8 text-blueGray-200">
                All your information is completely confidential
              </p>
              <div className="mx-auto flex max-w-lg flex-wrap">
                <div className="mb-3 flex w-full rounded border border-blue-300 bg-blue-500 px-3 md:mb-0 md:mr-6 md:w-2/3">
                  <svg
                    className="my-auto size-6 text-blue-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewbox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <input
                    className="leading-none w-full bg-blue-500 py-4 pl-3 text-xs font-semibold text-white outline-none placeholder:text-white"
                    type="text"
                    placeholder="Type your e-mail"
                  />
                </div>
                <button
                  className="leading-none w-full rounded border border-blue-300 bg-white px-8 py-4 text-xs font-semibold text-blue-800 transition duration-300 ease-in-out hover:border-blue-300 hover:bg-blue-500 hover:text-white md:w-auto"
                  type="submit"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogSingle;
