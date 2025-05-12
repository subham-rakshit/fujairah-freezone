import {
  AboutCompanySection,
  BusinessSetup,
  FaqSection,
  GetInTouch,
  HeroSection,
  MediaSecition,
  OurServices,
  PartnershipsSection,
  PartnersSection,
  SocialMediaSection,
  TestimonialSection,
  WhySetupSection,
} from "@/components/public-pages-component";

const HomePage = () => {
  return (
    <>
      <HeroSection />
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
