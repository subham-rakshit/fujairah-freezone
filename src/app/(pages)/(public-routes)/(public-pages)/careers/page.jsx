import {
  CareerListingSection,
  CommonBannerSection,
  FrontEndBreadcrumb,
} from "@/components/public-pages-component";
import ROUTES from "@/constants/routes";

const CareersPage = () => {
  return (
    <div className="w-full mt-[82px] lg:mt-[94px]">
      <FrontEndBreadcrumb
        fields={[{ label: "Home", link: ROUTES.HOME }]}
        currentTabName="Careers"
        navContainerClass="flex flex-wrap items-center gap-2 mb-[24px]"
      />

      <CommonBannerSection
        tagText="Careers"
        headingText="Job Vacancies"
        descriptionText="Join our team! We are looking for professionals who will help make
        driving safe and comfortable for everyone."
      />
      <CareerListingSection />
    </div>
  );
};

export default CareersPage;
