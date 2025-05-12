import { BackgroundRevealButton, FontResizerWrapper } from "../..";

const HeroSection = () => {
  return (
    <>
      {/* Mobile Hero Section */}
      {/* <section id="mobile-screen-hero-section" className="lg:hidden w-full">
        <h1 className="text-[34px] font-candara-rg font-bold leading-[41.5px] text-black-500 mt-[84px] mb-[16px]">
          Bin Yaber Driving Institute – Your Path to Safe Driving
        </h1>

        <div className="relative w-full aspect-[70/45] rounded-[20px] overflow-hidden">
          <Image
            src="/bin-yaber-assets/hero-section-bg-image.png"
            alt="banner image"
            fill
            priority={true}
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <div className="absolute inset-0 bg-hero-section-gradient-mobile" />
        </div>
      </section> */}
      {/* Hero Section */}
      <section
        id="home-page-hero-section"
        className="w-full flex min-h-[100vh] bg-home-hero-section-bg-image bg-cover bg-end relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-hero-section-gradient" />

        <div className="mt-auto max-screen-width relative z-[99] px-5 pb-[40px] 2xl:pb-[100px]">
          <div className="w-full max-w-[800px]">
            <FontResizerWrapper
              as="h3"
              fontClasses={{ 0: "body-0-1", 1: "body1", 2: "body-1-0" }}
              className="text-dark-white font-family-secondary font-[500] uppercase"
            >
              Welcome to FUJAIRAH Free Zone
            </FontResizerWrapper>
            <FontResizerWrapper
              as="h1"
              fontClasses={{
                0: "heading-0-1",
                1: "heading-1",
                2: "heading-1-1",
              }}
              className="text-dark-white font-family-primary capitalize mb-[24px]"
            >
              The Free Zone Ecosystem designed for growth
            </FontResizerWrapper>
            <FontResizerWrapper
              as="p"
              fontClasses={{
                0: "subtitle-0-2",
                1: "subtitle-2",
                2: "subtitle-2-1",
              }}
              className="text-dark-white font-family-secondary mb-[24px]"
            >
              Fujairah's strategic & unique location, as the UAE's only Emirate
              on East Coast, plays a key role in its development. Under the
              leadership and vision of Sheikh Hamed Bin Mohammed Al Sharqi, the
              Ruler of Fujairah, the Emirates continues to grow.
            </FontResizerWrapper>

            <BackgroundRevealButton btnLabel="Start Business Now" />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
