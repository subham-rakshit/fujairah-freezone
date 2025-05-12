import {
  FrontEndBreadcrumb,
  OffersBannerSection,
  OffersContentSection,
} from "@/components/public-pages-component";
import ROUTES from "@/constants/routes";

const OffersPage = () => {
  return (
    <div className="w-full mt-[101px] lg:mt-[120px]">
      <FrontEndBreadcrumb
        fields={[{ label: "Home", link: ROUTES.HOME }]}
        currentTabName="Offers"
        navContainerClass="flex flex-wrap items-center gap-2 mb-[24px]"
      />

      <OffersBannerSection />
      <OffersContentSection />
    </div>
  );
};

export default OffersPage;
