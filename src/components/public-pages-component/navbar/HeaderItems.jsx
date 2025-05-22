"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { BsBell } from "react-icons/bs";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineLocalPhone, MdOutlineMailOutline } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import {
  FontResizerWrapper,
  HeaderLinks,
  LanguageSwitcher,
  NavSearchButton,
  SettingsButton,
} from "..";

const socials = [
  {
    link: "#",
    icon: <FaInstagram color="#fff" size={18} />,
  },
  {
    link: "#",
    icon: <FaYoutube color="#fff" size={18} />,
  },
  {
    link: "#",
    icon: <FaFacebook color="#fff" size={18} />,
  },
  {
    link: "#",
    icon: <RiTwitterXFill color="#fff" size={18} />,
  },
];

const HeaderItems = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  const handleScroll = useCallback(() => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {/* Header Part 1 */}
      <div
        className={`${isScrolled ? "h-0 opacity-0" : "h-[50px] opacity-100"} overflow-hidden bg-gray-alt w-full transition-all duration-500 ease-in-out`}
      >
        <div className="max-screen-width-layout flex size-full items-center justify-between gap-5 px-5">
          <div className="flex h-full items-center gap-5">
            {/* Phone Number */}
            <div className="flex items-center gap-[6px]">
              <div className="rounded-full bg-[#fff] p-[4px]">
                <MdOutlineLocalPhone color="#00587E" size={18} />
              </div>

              <span className="body3 text-dark-white">+971 9 222 8000</span>
            </div>

            {/* Mail */}
            <div className="flex items-center gap-[6px]">
              <div className="rounded-full bg-[#fff] p-[4px]">
                <MdOutlineMailOutline color="#00587E" size={18} />
              </div>

              <span className="body3 text-dark-white">
                freezone@emirates.net.ae
              </span>
            </div>

            {/* Consult Now Button */}
            <button
              type="button"
              className="bg-secondary-400 body3 text-dark-white h-full w-fit p-[10px]"
            >
              CONSULT NOW
            </button>
          </div>

          <div className="flex h-full items-center gap-5">
            {/* Language Changer */}
            <div className="flex items-center gap-4">
              <BsBell color="#fff" size={18} />

              <LanguageSwitcher />
            </div>

            {/* Socials */}
            <div className="flex items-center gap-[10px]">
              {socials.map((social, index) => (
                <Link
                  key={`social-${index}`}
                  href={social.link}
                  className="bg-primary-400 flex items-center justify-center overflow-hidden rounded-full border border-[#fff] p-[6px]"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Header Part 2 */}
      <nav
        className={`w-full py-[6px] ${isScrolled ? "bg-[#000]/80" : "bg-transparent"} transition-all duration-500 ease-in-out`}
      >
        <div className="max-screen-width-layout flex h-full items-center justify-between gap-5 px-5">
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

          {/* Header Links */}
          <ul className="flex items-center gap-4">
            <HeaderLinks />
          </ul>

          {/* Nav Buttons */}
          <div className="flex items-center gap-2">
            <NavSearchButton />

            <SettingsButton />

            <button
              type="button"
              className="px-[20px] py-[10px] rounded-full bg-secondary-400 body3 text-dark-white font-poppins-rg font-[500] border border-[#fff]"
            >
              <FontResizerWrapper
                as="span"
                fontClasses={{
                  0: "body-0-3",
                  1: "body3",
                  2: "body-3-1",
                }}
                className="inline-block"
              >
                E-Service
              </FontResizerWrapper>
            </button>

            <button
              type="button"
              className="px-[20px] py-[10px] rounded-full bg-primary-400 body3 text-dark-white font-poppins-rg font-[500] border border-[#fff]"
            >
              <FontResizerWrapper
                as="span"
                fontClasses={{
                  0: "body-0-3",
                  1: "body3",
                  2: "body-3-1",
                }}
                className="inline-block"
              >
                Appointment
              </FontResizerWrapper>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderItems;
