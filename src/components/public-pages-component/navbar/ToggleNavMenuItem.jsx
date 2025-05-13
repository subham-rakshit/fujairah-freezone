"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FontResizerWrapper } from "..";

const ToggleNavMenuItem = ({
  navItemDetails,
  pathname = "",
  currentLanguage = "en",
  isSmallDevice = false,
}) => {
  const { children, link, name, _id } = navItemDetails;
  const [isToggle, setIsToggle] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // Design After 1024px size (LG)
  if (!isSmallDevice) {
    return (
      <>
        <li
          key={_id}
          onMouseEnter={() => setIsToggle(true)}
          onMouseLeave={() => setIsToggle(false)}
          onClick={() => setIsToggle((prev) => !prev)}
          className={`text-dark-white font-poppins-md relative cursor-pointer py-4`}
        >
          <Link href={link} className="flex items-center gap-1">
            <FontResizerWrapper
              as="span"
              fontClasses={{
                0: "body-0-3",
                1: "body3",
                2: "body-3-1",
              }}
              className="inline-block"
            >
              {name || "Not Found"}
            </FontResizerWrapper>
            <IoIosArrowDown size={14} color="#fff" />
          </Link>

          {/* Dropdown Animation */}
          <AnimatePresence>
            {isToggle && (
              <motion.ul
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-full left-0 bg-[#fff]"
              >
                {/* Dropdown Content Goes Here */}
                {children && children.length > 0
                  ? children.map((eachChild, index) => (
                      <li
                        key={eachChild._id}
                        className="body3 font-poppins-rg hover:bg-primary-400 hover:text-white text-gray-400 transition-300 px-4 py-2 whitespace-nowrap"
                      >
                        <Link href={eachChild.link}>
                          <span>{eachChild.name || "Not Found"}</span>
                        </Link>
                      </li>
                    ))
                  : null}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      </>
    );
  }

  return (
    <li
      key={_id}
      onClick={() => setIsDropDownOpen((prev) => !prev)}
      className={`text-[18px] text-black-500 font-candara-rg cursor-pointer`}
    >
      <div className="flex items-center gap-[8px] px-[10px] py-[12px]">
        <span className="px-[10px] py-[6px] flex items-center gap-[8px]">
          {name[currentLanguage || "en"] || "Not Found"}
        </span>
        <div className="size-[18px] relative">
          <Image
            src="/bin-yaber-assets/icons/arrows-down/arrow-down-linear-dark.png"
            alt="arrow down"
            fill
            sizes="(max-width: 768px) 18px, 18px"
            className={`${isDropDownOpen ? "rotate-[180deg]" : "rotate-[0deg]"} transition-300`}
          />
        </div>
      </div>

      {/* Dropdown Animation */}
      <AnimatePresence>
        {isDropDownOpen && (
          <motion.ul
            initial={{ maxHeight: 0, opacity: 0 }}
            animate={{ maxHeight: "fit-content", opacity: 1 }}
            exit={{ maxHeight: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-auto px-[20px]"
          >
            {children && children.length > 0
              ? children.map((eachChild, index) =>
                  index < 4 ? (
                    <li
                      key={eachChild._id}
                      className="text-[16px] text-black-500 font-candara-rg px-[10px] py-[12px]"
                    >
                      <Link href={eachChild.link}>
                        <span>
                          {eachChild?.name[currentLanguage || "en"] ||
                            "Not Found"}
                        </span>
                      </Link>
                    </li>
                  ) : null
                )
              : null}
            {/* More */}
            <li className="text-[16px] font-candara-rg px-[10px] py-[12px]">
              <Link href={link} className="text-black-600">
                View more
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default ToggleNavMenuItem;
