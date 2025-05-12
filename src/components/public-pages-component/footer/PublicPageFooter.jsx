"use server";

import {
  footer_quick_links,
  footer_services,
  footer_start_your_business,
} from "@/app/assets/data/footerData";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

import { FiPhoneCall } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import { TbArrowBigDown } from "react-icons/tb";
import { BackgroundRevealButton, FontResizerWrapper } from "..";

const socials = [
  {
    link: "#",
    icon: <FaInstagram size={25} />,
  },
  {
    link: "#",
    icon: <FaYoutube size={25} />,
  },
  {
    link: "#",
    icon: <FaFacebook size={25} />,
  },
  {
    link: "#",
    icon: <RiTwitterXFill size={25} />,
  },
];

const PublicPageFooter = async () => {
  return (
    <footer className="relative py-[30px] px-[30px] shadow-custom-top bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)]">
      <div className="relative max-screen-width py-10">
        <div className="relative z-[100] w-full max-w-fit p-[25px] border-2 border-[#ffffff50] bg-[#ffffff10] rounded-[24px]">
          <FontResizerWrapper
            as="h1"
            fontClasses={{
              0: "heading-0-2",
              1: "heading-2",
              2: "heading-2-1",
            }}
            className="font-poppins-rg font-semibold text-dark-white w-fit"
          >
            Learn How We Create
            <br />
            Unmatched
            <br />
            Solutions For Businesses
          </FontResizerWrapper>

          <FontResizerWrapper
            as="p"
            fontClasses={{
              0: "body-0-1",
              1: "body1",
              2: "body-1-1",
            }}
            className="font-poppins-rg font-medium text-dark-white mt-5 mb-6"
          >
            Dorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit.
          </FontResizerWrapper>

          <BackgroundRevealButton btnLabel="Start Business Now" />
        </div>

        <div className="absolute right-0 top-[-250px] w-[100%] h-[200%] z-[9]">
          <Image
            src="/fujairah-freezone/footer-image.png"
            alt="image"
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-contain object-right"
          />
        </div>
      </div>

      <div className="relative z-[100] rounded-[24px] py-[39px] px-[30px] bg-gradient-to-r from-white to-[#BAF8FB]">
        <div className="max-screen-width">
          <div className="w-full flex items-center justify-between gap-[60px]">
            {/* Footer Info */}
            <div className="w-full max-w-[500px]">
              {/* Logo */}
              <Link href="/">
                <div className="relative size-[75px] overflow-hidden">
                  <Image
                    src="/fujairah-freezone/website-logo/website-logo-light.png"
                    alt="logo"
                    fill
                    priority={true}
                    sizes="(max-width: 768px) 100vw, 100vw"
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Contact Number */}
              <div className="flex items-center gap-4 text-gray-400 mt-6">
                <FiPhoneCall size={30} />
                <FontResizerWrapper
                  as="span"
                  fontClasses={{
                    0: "body-0-2",
                    1: "body2",
                    2: "body-2-1",
                  }}
                  className="font-poppins-rg font-medium"
                >
                  +971-44220781
                </FontResizerWrapper>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 text-gray-400 mt-4">
                <span className="inline-block relative">
                  <GoMail size={30} />
                  <TbArrowBigDown
                    size={25}
                    className="rotate-[180deg] absolute top-[-12px] left-1/2 translate-x-[-50%] z-[99] fill-white"
                  />
                </span>
                <FontResizerWrapper
                  as="span"
                  fontClasses={{
                    0: "body-0-2",
                    1: "body2",
                    2: "body-2-1",
                  }}
                  className="font-poppins-rg font-medium"
                >
                  freezone@emirates.net.ae
                </FontResizerWrapper>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 text-gray-400 mt-4">
                <span>
                  <GrLocation size={30} />
                </span>
                <FontResizerWrapper
                  as="span"
                  fontClasses={{
                    0: "body-0-2",
                    1: "body2",
                    2: "body-2-1",
                  }}
                  className="font-poppins-rg font-medium max-w-[400px]"
                >
                  Ground Floor, Creek Tower, Beside Land Department, Baniyas
                  Road , Deira - Dubai.
                </FontResizerWrapper>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-[10px] mt-6">
                {socials.map((social, index) => (
                  <Link
                    key={`social-${index}`}
                    href={social.link}
                    className="flex items-center justify-center overflow-hidden rounded-full border border-[#36393B] p-[6px] bg-[#00587E33] hover:bg-primary-400 text-gray-400 hover:text-dark-white hover:border-[#BAF8FB] transition-all duration-500 ease-in-out"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <ul className="w-full max-w-[900px] flex flex-1">
              {/* Footer Quick Links */}
              <li className="flex flex-col flex-1 font-poppins-rg font-medium text-gray-400">
                <FontResizerWrapper
                  as="span"
                  fontClasses={{
                    0: "subtitle-0-2",
                    1: "subtitle-2",
                    2: "subtitle-2-1",
                  }}
                  className="inline-block subtitle-2 font-bold"
                >
                  {footer_quick_links.label}
                </FontResizerWrapper>
                <hr className="w-full border border-[#00000020] my-2" />
                {footer_quick_links.child.map((item, index) => (
                  <Link
                    key={`quick-link-${index + 1}`}
                    href={item.link}
                    className="group inline-block pr-10"
                  >
                    <FontResizerWrapper
                      as="span"
                      fontClasses={{
                        0: "body-0-2",
                        1: "body2",
                        2: "body-2-1",
                      }}
                      className="w-fit inline-block relative"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </FontResizerWrapper>
                  </Link>
                ))}
              </li>

              {/* Start Your Business */}
              <li className="flex flex-col flex-1 font-poppins-rg font-medium text-gray-400">
                <FontResizerWrapper
                  as="span"
                  fontClasses={{
                    0: "subtitle-0-2",
                    1: "subtitle-2",
                    2: "subtitle-2-1",
                  }}
                  className="inline-block subtitle-2 font-bold"
                >
                  {footer_start_your_business.label}
                </FontResizerWrapper>
                <hr className="w-full border border-[#00000020] my-2" />
                {footer_start_your_business.child.map((item, index) => (
                  <Link
                    key={`start-your-business-${index + 1}`}
                    href={item.link}
                    className="group inline-block pr-10"
                  >
                    <FontResizerWrapper
                      as="span"
                      fontClasses={{
                        0: "body-0-2",
                        1: "body2",
                        2: "body-2-1",
                      }}
                      className="w-fit inline-block relative whitespace-nowrap"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </FontResizerWrapper>
                  </Link>
                ))}
              </li>

              {/* Services */}
              <li className="flex flex-col flex-1 font-poppins-rg font-medium text-gray-400">
                <FontResizerWrapper
                  as="span"
                  fontClasses={{
                    0: "subtitle-0-2",
                    1: "subtitle-2",
                    2: "subtitle-2-1",
                  }}
                  className="inline-block font-bold"
                >
                  {footer_services.label}
                </FontResizerWrapper>
                <hr className="w-full border border-[#00000020] my-2" />
                {footer_services.child.map((item, index) => (
                  <Link
                    key={`services-${index + 1}`}
                    href={item.link}
                    className="group inline-block"
                  >
                    <FontResizerWrapper
                      as="span"
                      fontClasses={{
                        0: "body-0-2",
                        1: "body2",
                        2: "body-2-1",
                      }}
                      className="w-fit inline-block relative whitespace-nowrap"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    </FontResizerWrapper>
                  </Link>
                ))}
              </li>
            </ul>
          </div>

          {/* Copy Right Section */}
          <div className="w-full pt-5 border-t border-[#00000020] flex items-center justify-between gap-5 mt-[40px]">
            <FontResizerWrapper
              as="p"
              fontClasses={{
                0: "body-0-3",
                1: "body3",
                2: "body-3-1",
              }}
              className="text-gray-400 font-poppins-rg font-medium"
            >
              © 2025 all rights reserved, Fujairah Freezone Authority,
              Fujairah, UAE
            </FontResizerWrapper>

            <div className="flex items-center gap-3">
              <Link
                href="#"
                className="text-gray-400 font-poppins-rg font-medium group"
              >
                <span className="w-fit inline-block relative whitespace-nowrap">
                  <FontResizerWrapper
                    as="span"
                    fontClasses={{
                      0: "body-0-3",
                      1: "body3",
                      2: "body-3-1",
                    }}
                  >
                    Privacy Policy
                  </FontResizerWrapper>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </span>
              </Link>

              <Link
                href="#"
                className="text-gray-400 font-poppins-rg font-medium group"
              >
                <span className="w-fit inline-block relative whitespace-nowrap">
                  <FontResizerWrapper
                    as="span"
                    fontClasses={{
                      0: "body-0-3",
                      1: "body3",
                      2: "body-3-1",
                    }}
                  >
                    Terms & Conditions
                  </FontResizerWrapper>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </span>
              </Link>

              <Link
                href="#"
                className="text-gray-400 font-poppins-rg font-medium group"
              >
                <span className="w-fit inline-block relative whitespace-nowrap">
                  <FontResizerWrapper
                    as="span"
                    fontClasses={{
                      0: "body-0-3",
                      1: "body3",
                      2: "body-3-1",
                    }}
                  >
                    Registerd Companies
                  </FontResizerWrapper>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </span>
              </Link>

              <Link
                href="#"
                className="text-gray-400 font-poppins-rg font-medium group"
              >
                <span className="w-fit inline-block relative whitespace-nowrap">
                  <FontResizerWrapper
                    as="span"
                    fontClasses={{
                      0: "body-0-3",
                      1: "body3",
                      2: "body-3-1",
                    }}
                  >
                    Sitemap
                  </FontResizerWrapper>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PublicPageFooter;
