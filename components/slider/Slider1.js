import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

SwiperCore.use([Navigation]);

const Slider1 = () => {
    return (
        <>
            <Swiper
                breakpoints={{                 
                  // when window width is >= 768px
                  768: {
                    width: 768,
                    slidesPerView: 2,
                  },
                }}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation={{
                    prevEl: ".custom_prev",
                    nextEl: ".custom_next"
                }}             
            >
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/assets/imgs/placeholders/img-2.jpg" alt="Monst" />
                            <div className="flex items-end justify-between">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>User growth</a>
                                        </Link>
                                    </h1>
                                    <p className="mt-2 text-xs text-gray-500">Harvard university</p>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <a className="hover-up-2 mr-2 inline-block rounded border border-blue-200 px-4 py-3 text-xs font-semibold leading-none tracking-wide text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/assets/imgs/placeholders/img-3.jpg" alt="Monst" />
                            <div className="flex items-end justify-between">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>Products</a>
                                        </Link>
                                    </h1>
                                    <p className="mt-2 text-xs text-gray-500">Cocacola., Co</p>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <a className="hover-up-2 mr-2 inline-block rounded border border-blue-200 px-4 py-3 text-xs font-semibold leading-none tracking-wide text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/assets/imgs/placeholders/img-4.jpg" alt="Monst" />
                            <div className="flex items-end justify-between">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>Event</a>
                                        </Link>
                                    </h1>
                                    <p className="mt-2 text-xs text-gray-500">Oxford university</p>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <a className="hover-up-2 mr-2 inline-block rounded border border-blue-200 px-4 py-3 text-xs font-semibold leading-none tracking-wide text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="px-3 pb-5">
                        <div className="card-slider group">
                            <img className="rounded-xl" src="/assets/imgs/placeholders/img-5.jpg" alt="Monst" />
                            <div className="flex items-end justify-between">
                                <div>
                                    <h1 className="mt-5 text-xl font-semibold group-hover:text-blue-500">
                                        <Link href="/services">
                                            <a>Shopping</a>
                                        </Link>
                                    </h1>
                                    <p className="mt-2 text-xs text-gray-500">Alibaba Co</p>
                                </div>
                                <div>
                                    <Link href="/services">
                                        <a className="hover-up-2 mr-2 inline-block rounded border border-blue-200 px-4 py-3 text-xs font-semibold leading-none tracking-wide text-blue-500 hover:border-blue-500 hover:bg-blue-500 hover:text-white">View Details</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div id="carausel-2-columns-1-arrows" className="flex">
                <span className="slick-arrow custom_prev mr-4 flex text-blue-500">
                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path>
                    </svg>
                </span>
                <span className="slick-arrow custom_next flex text-blue-500">
                    <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </span>
            </div>
        </>
    );
};

export default Slider1;
