import {
  AboutCompanySection,
  BusinessSetup,
  FaqSection,
  GetInTouch,
  MediaSecition,
  OurServices,
  PageHeroSection,
  PartnershipsSection,
  PartnersSection,
  SocialMediaSection,
  TestimonialSection,
  WhySetupSection,
} from "@/components/public-pages-component";

const HomePage = () => {
  return (
    <>
      {/* <HeroSection /> */}
      <PageHeroSection
        sectionId="home-page-hero-section"
        bgImageClass="bg-home-hero-section-bg-image"
        subHeading="Welcome to FUJAIRAH Free Zone"
        heading="The Free Zone Ecosystem designed for growth"
        description="Fujairah's strategic & unique location, as the UAE's only Emirate on East Coast, plays a key role in its development. Under the leadership and vision of Sheikh Hamed Bin Mohammed Al Sharqi, the Ruler of Fujairah, the Emirates continues to grow."
        btnLabel="Start Business Now"
      />
      <AboutCompanySection />
      {/* <StartupGridSection /> */}
      <WhySetupSection />
      <PartnersSection />
      <OurServices />
      <BusinessSetup />
      <SocialMediaSection />
      <TestimonialSection />
      <FaqSection />
      <MediaSecition />
      <PartnershipsSection />
      <GetInTouch />
    </>
  );
};

export default HomePage;
