import { useMemo } from "react";
import { FontResizerWrapper, PartnerMovingLogos } from "../..";

const PartnersSection = () => {
  const logos = useMemo(
    () => [
      {
        src: "/fujairah-freezone/pages/home/partner-logo-1.png",
        alt: "FAB",
      },
      {
        src: "/fujairah-freezone/pages/home/partner-logo-2.png",
        alt: "FAB",
      },
      {
        src: "/fujairah-freezone/pages/home/partner-logo-3.png",
        alt: "FAB",
      },
      {
        src: "/fujairah-freezone/pages/home/partner-logo-4.png",
        alt: "FAB",
      },
    ],
    []
  );

  return (
    <section
      id="home-page-partners-section"
      className="w-full py-[70px] relative bg-home-partners-section-bg-image bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-[#00587EB2]" />

      <div className="relative z-[99]">
        <FontResizerWrapper
          as="h1"
          fontClasses={{
            0: "heading-0-2",
            1: "heading-2",
            2: "heading-2-1",
          }}
          className="max-screen-width text-dark-white font-poppins-rg font-[600] px-5 mb-[30px]"
        >
          Partners
        </FontResizerWrapper>

        <PartnerMovingLogos logos={logos} />
      </div>
    </section>
  );
};

export default PartnersSection;
