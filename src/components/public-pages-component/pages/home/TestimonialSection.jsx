"use client";

import { FontResizerWrapper, SectionInfo } from "../..";

import { testimonials } from "@/app/assets/data/pagesData/home-page-data";
import Image from "next/image";
import { useMemo, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Slider from "react-slick";

const TestimonialSection = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = useMemo(() => {
    return {
      dots: false,
      infinite: true,
      // speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      initialSlide: 0,
      // autoplay: true,
      // autoplaySpeed: 2000,
      // pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    };
  }, []);

  return (
    <>
      <section
        id="home-page-testimonial-section"
        className="w-full py-[80px] relative"
      >
        <div className="absolute inset-0 bg-home-overlay-4 bg-cover opacity-80" />

        <div className="relative z-[99] max-screen-width px-5">
          <SectionInfo heading="Client Testimonials" className="mb-[54px]" />

          <div className="relative overflow-hidden">
            <div className="absolute z-[999] top-1/2 -translate-y-1/2 w-full flex items-center justify-between">
              <button
                type="button"
                onClick={() => sliderRef?.slickPrev()}
                className="bg-gray size-[40px] rounded-full text-dark-white flex items-center justify-center"
              >
                <IoIosArrowBack size={20} />
              </button>

              <button
                type="button"
                onClick={() => sliderRef?.slickNext()}
                className="bg-gray size-[40px] rounded-full text-dark-white flex items-center justify-center"
              >
                <IoIosArrowForward size={20} />
              </button>
            </div>

            <Slider ref={setSliderRef} {...settings}>
              {testimonials.map((item) => (
                <div key={item._id} className="px-2">
                  <div className="relative h-[450px] rounded-[24px] shadow-lg my-3 overflow-hidden bg-white py-[20px] px-4">
                    <div className="absolute top-[-120px] left-[-50%] w-[200%] h-[300px] bg-primary-400 rounded-b-[50%] shadow-[0px_17.26px_35.96px_0px_#4747B933]"></div>

                    <div className="size-full relative z-[10] flex flex-col items-center justify-between">
                      {/* Ratings */}
                      <div className="flex items-center gap-[2px]">
                        {Array(Number(item.numOfStars))
                          .fill(0)
                          .map((_, index) => (
                            <FaStar key={index} size={20} color="#FFCF0D" />
                          ))}
                      </div>

                      {/* User Image */}
                      <div className="relative size-[160px] rounded-full shadow-[0px_17.26px_35.96px_0px_#4747B933] overflow-hidden">
                        <Image
                          src={item.clientImageSrc}
                          alt={item.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 100vw"
                          className="object-cover"
                        />
                      </div>

                      <div>
                        {/* User Name */}
                        <FontResizerWrapper
                          as="h5"
                          fontClasses={{
                            0: "body-0-2",
                            1: "body2",
                            2: "body-2-1",
                          }}
                          className="text-gray-400 font-family-secondary font-[600] text-center"
                        >
                          {item.name}
                        </FontResizerWrapper>

                        {/* User Name */}
                        <FontResizerWrapper
                          as="h6"
                          fontClasses={{
                            0: "body-0-3",
                            1: "body3",
                            2: "body-3-1",
                          }}
                          className="text-gray-350 font-family-secondary font-[400] text-center"
                        >
                          {item.designation}
                        </FontResizerWrapper>
                      </div>

                      {/* User Message */}
                      <FontResizerWrapper
                        as="p"
                        fontClasses={{
                          0: "body-0-2",
                          1: "body2",
                          2: "body-2-1",
                        }}
                        className="text-gray-400 font-family-secondary font-[400]"
                      >
                        {item.message}
                      </FontResizerWrapper>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
