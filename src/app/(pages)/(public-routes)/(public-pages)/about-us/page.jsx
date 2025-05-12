import {
  BannerSection,
  ChairmanMessageSection,
  FrontEndBreadcrumb,
  OurMissionSection,
  OurVisionSection,
  WhyChooseUsSection,
} from "@/components/public-pages-component";
import ROUTES from "@/constants/routes";

const AboutUsPage = () => {
  return (
    <div className="w-full mt-[82px] lg:mt-[94px]">
      <FrontEndBreadcrumb
        fields={[{ label: "Home", link: ROUTES.HOME }]}
        currentTabName="About us"
        navContainerClass="flex flex-wrap items-center gap-2 mb-[24px]"
      />

      <BannerSection />

      <OurMissionSection />

      <OurVisionSection />

      <WhyChooseUsSection />

      <ChairmanMessageSection />
    </div>
  );
};

export default AboutUsPage;
