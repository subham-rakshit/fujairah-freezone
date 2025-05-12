import Link from "next/link";
import { FontResizerWrapper, ToggleNavMenuItem } from "..";

const menuTree = [
  {
    _id: "menu-home-parent",
    name: "Home",
    link: "/",
    children: [],
  },
  {
    _id: "menu-about-us-parent",
    name: "About Us",
    link: "#",
    children: [
      {
        _id: "menu-about-us-child-1",
        name: "Mission Statement",
        link: "#",
        children: [],
      },
      {
        _id: "menu-about-us-child-2",
        name: "Messages",
        link: "#",
        children: [],
      },
      {
        _id: "menu-about-us-child-3",
        name: "Organization Structure",
        link: "#",
        children: [],
      },
    ],
  },
  {
    _id: "menu-start-your-business-parent",
    name: "Start Your Business",
    link: "#",
    children: [
      {
        _id: "menu-start-your-business-child-1",
        name: "Flexi Desk",
        link: "#",
        children: [],
      },
      {
        _id: "menu-start-your-business-child-2",
        name: "Representative / Branch Offices",
        link: "#",
        children: [],
      },
      {
        _id: "menu-start-your-business-child-3",
        name: "Warehouse",
        link: "#",
        children: [],
      },
      {
        _id: "menu-start-your-business-child-4",
        name: "Open Land",
        link: "#",
        children: [],
      },
      {
        _id: "menu-start-your-business-child-5",
        name: "Custom Build Units",
        link: "#",
        children: [],
      },
      {
        _id: "menu-start-your-business-child-6",
        name: "Overseas Company (Offshore)",
        link: "#",
        children: [],
      },
      {
        _id: "menu-start-your-business-child-7",
        name: "Important Information",
        link: "#",
        children: [],
      },
    ],
  },
  {
    _id: "menu-our-services-parent",
    name: "Our Services",
    link: "/our-services",
    children: [
      {
        _id: "menu-our-services-child-1",
        name: "License",
        link: "#",
        children: [],
      },
      {
        _id: "menu-our-services-child-2",
        name: "Lease",
        link: "#",
        children: [],
      },
      {
        _id: "menu-our-services-child-3",
        name: "Visas",
        link: "#",
        children: [],
      },
      {
        _id: "menu-our-services-child-4",
        name: "NOC / Certificates",
        link: "#",
        children: [],
      },
      {
        _id: "menu-our-services-child-5",
        name: "Registration and Downloads",
        link: "#",
        children: [],
      },
      {
        _id: "menu-our-services-child-6",
        name: "AML/CTF LAWS",
        link: "#",
        children: [],
      },
    ],
  },
  {
    _id: "menu-media-center-parent",
    name: "Media Center",
    link: "/media-center",
    children: [
      {
        _id: "menu-media-center-child-1",
        name: "Photo Gallery",
        link: "#",
        children: [],
      },
      {
        _id: "menu-media-center-child-2",
        name: "Video Gallery",
        link: "#",
        children: [],
      },
      {
        _id: "menu-media-center-child-3",
        name: "Commercial Movie",
        link: "#",
        children: [],
      },
    ],
  },
  {
    _id: "menu-investors-corner-parent",
    name: "Investors Corner",
    link: "/investors-corner",
    children: [
      {
        _id: "menu-investors-corner-child-1",
        name: "Advertise with us",
        link: "#",
        children: [],
      },
      {
        _id: "menu-investors-corner-child-2",
        name: "Listed Companies / Investors",
        link: "#",
        children: [],
      },
    ],
  },
  {
    _id: "menu-contact-us-parent",
    name: "Contact Us",
    link: "/contact-us",
    children: [],
  },
  {
    _id: "menu-faqs-parent",
    name: "FAQs",
    link: "/faqs",
    children: [],
  },
];

const HeaderLinks = ({ pathname = "", currentLanguage = "en" }) => {
  return (
    <>
      {menuTree.length > 0 &&
        menuTree.map((eachMenu) =>
          eachMenu.children && eachMenu.children.length > 0 ? (
            <ToggleNavMenuItem
              key={eachMenu._id}
              navItemDetails={eachMenu}
              pathname={pathname}
              currentLanguage={currentLanguage}
            />
          ) : (
            <li
              key={eachMenu._id}
              className={`text-dark-white font-poppins-md py-4`}
            >
              <Link href={eachMenu.link} className="">
                <FontResizerWrapper
                  as="span"
                  fontClasses={{
                    0: "body-0-3",
                    1: "body3",
                    2: "body-3-1",
                  }}
                  className="inline-block"
                >
                  {eachMenu.name || "Not Found"}
                </FontResizerWrapper>
              </Link>
            </li>
          )
        )}
    </>
  );
};

export default HeaderLinks;
