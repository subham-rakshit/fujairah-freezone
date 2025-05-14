"use client";

import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { FontResizerWrapper } from "..";

const FrontEndBreadcrumb = ({
  fields,
  currentTabName = "",
  isCurrentTabTranslated = false,
  timestamp = "",
  navContainerClass = "",
}) => {
  const t = useTranslations();

  return (
    <div>
      <nav aria-label="Breadcrumb" className={navContainerClass}>
        {fields.map((field, index) => (
          <div
            key={`${field.label}-${index + 1}`}
            className="flex items-center gap-1"
          >
            {/* Separator */}
            {index > 0 && (
              <ChevronRight
                size={20}
                className="text-gray-400 dark:text-dark-white"
              />
            )}

            {/* Render the breadcrumb item */}
            <Link
              href={field.link}
              className={`text-[18px] text-black-300 font-candara-rg leading-[100%] hover:text-orange-500 transition-300`}
            >
              <FontResizerWrapper
                as="span"
                fontClasses={{
                  0: "body-0-2",
                  1: "body2",
                  2: "body-2-1",
                }}
                className={`text-gray-400 dark:text-dark-white font-family-secondary font-[400]`}
              >
                {field.label}
              </FontResizerWrapper>
            </Link>
          </div>
        ))}

        {/* Current Tab */}
        {currentTabName && (
          <div className="flex items-center gap-1">
            {/* Separator */}
            <ChevronRight
              size={20}
              className="text-gray-400 dark:text-dark-white"
            />

            {/* Render the breadcrumb item */}
            <Link href="#">
              <FontResizerWrapper
                as="span"
                fontClasses={{
                  0: "body-0-2",
                  1: "body2",
                  2: "body-2-1",
                }}
                className={`text-primary-400 font-family-secondary font-[400]`}
              >
                {currentTabName}
              </FontResizerWrapper>
            </Link>
          </div>
        )}
      </nav>

      {timestamp && (
        <FontResizerWrapper
          as="span"
          fontClasses={{
            0: "body-0-3",
            1: "body3",
            2: "body-3-1",
          }}
          className={`text-gray-400 dark:text-dark-white font-family-secondary font-[300] italic`}
        >
          {timestamp}
        </FontResizerWrapper>
      )}
    </div>
  );
};

export default FrontEndBreadcrumb;
