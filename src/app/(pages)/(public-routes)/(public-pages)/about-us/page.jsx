import { PageHeroSection } from "@/components/public-pages-component";

const AboutUsPage = () => {
  return (
    <>
      {/* <FrontEndBreadcrumb
        fields={[{ label: "Home", link: ROUTES.HOME }]}
        currentTabName="About us"
        navContainerClass="flex flex-wrap items-center gap-2 mb-[24px]"
      /> */}

      <PageHeroSection
        sectionId="about-page-hero-section"
        bgImageClass="bg-about-hero-section-bg-image"
        heading="About Us"
        description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />
    </>
  );
};

export default AboutUsPage;
