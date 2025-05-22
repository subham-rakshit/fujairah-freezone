import Image from "next/image";
import {
  BackgroundRevealButton,
  FontResizerWrapper,
  RevealOnView,
} from "../..";

const AboutCompanySection = () => {
  return (
    <section
      id="home-page-about-company-section"
      className="w-full py-[80px] relative"
    >
      <div className="absolute inset-0 bg-home-overlay-1 bg-cover opacity-80" />

      <div className="relative max-screen-width px-5 z-[99] grid grid-cols-1 md:grid-cols-2 items-center gap-[50px] 2xl:gap-[120px]">
        <RevealOnView as="div" yOffset={50}>
          <FontResizerWrapper
            as="h1"
            fontClasses={{
              0: "heading-0-3",
              1: "heading-3",
              2: "heading-3-1",
            }}
            className="text-gray-400 dark:text-dark-white font-family-primary font-[600]"
          >
            About Company
          </FontResizerWrapper>

          <FontResizerWrapper
            as="p"
            fontClasses={{
              0: "subtitle-0-2",
              1: "subtitle-2",
              2: "subtitle-2-1",
            }}
            className="text-gray-400 dark:text-dark-white font-family-secondary font-[500] mt-[14px] mb-[40px]"
          >
            Since establishment, two decades ago, our business has grown
            manifold. Our investor base has crossed the borders of GCC to the
            Indian Subcontinent, China, West Asia, Africa, Europe and even the
            USA in trading, logistics, assembling, processing
          </FontResizerWrapper>

          <BackgroundRevealButton
            btnLabel="About Us"
            textColor="text-gray-400 dark:text-dark-white"
          />
        </RevealOnView>

        <div className="relative w-full max-h-[450px] aspect-square">
          <Image
            src="/fujairah-freezone/pages/home/home-about-comapny.jpg"
            alt="about company section image"
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover rounded-[24px]"
          />

          <div className="absolute top-full left-[-10%] translate-y-[-50%] z-[99] bg-[linear-gradient(270deg,_#00587E_0%,_#C8212B_100%)] w-full rounded-[12px] p-5">
            <FontResizerWrapper
              as="h2"
              fontClasses={{
                0: "subtitle-0-2",
                1: "subtitle-2",
                2: "subtitle-2-1",
              }}
              className="text-dark-white font-family-secondary font-[500]"
            >
              Our Facilities
            </FontResizerWrapper>

            <FontResizerWrapper
              as="p"
              fontClasses={{
                0: "body-0-2",
                1: "body2",
                2: "body-2-1",
              }}
              className="text-dark-white font-family-secondary font-[400] mt-5"
            >
              Borem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </FontResizerWrapper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
