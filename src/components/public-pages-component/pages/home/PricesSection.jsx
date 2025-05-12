import { pricesSectionData } from "@/app/assets/data/pagesData/home-page-data";
import Image from "next/image";
import { PageNavigationButton, PriceCard } from "../..";

const PricesSection = () => {
  return (
    <>
      <section
        id="home-page-prices-section"
        className="w-full pt-[80px] md:pt-[100px]"
      >
        <div className="w-full max-w-[955px] md:mx-auto">
          <PageNavigationButton
            btnText="Prices"
            extraClasses="mx-auto md:mx-0"
          />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 mt-[12px] md:mt-[24px]">
            <h1 className="hidden md:block w-full max-w-[467px] text-[55px] font-candara-rg font-bold text-black-500 leading-[67.14px]">
              Affordable Pricing for Every Driver
            </h1>

            <h1 className="md:hidden w-full max-w-[343px] text-[28px] font-candara-rg font-bold text-black-500 leading-[34.18px]">
              Budget-Friendly Pricing for Every Aspiring Driver
            </h1>

            <div className="w-full md:max-w-[317px] flex flex-col md:items-end gap-[14px] md:gap-5">
              <p className="w-full md:max-w-[285px] text-[16px] md:text-[20px] font-candara-rg md:text-right text-black-500 leading-[19.53px] md:leading-[24.41px]">
                Expert instructors. Flexible schedules. Affordable fees. Proven
                results.
              </p>

              <button
                type="button"
                className="w-[69px] h-[33px] md:w-fit md:h-[24px] rounded-[20px] border border-[#98999A] px-[12px] py-[8px] md:py-[4px] md:pl-[8px] md:pr-[4px] flex items-center justify-center gap-[4px] text-[14px] md:text-[12px] text-black-500 font-pp-neue-montreal-md leading-[17.09px] md:leading-[15px] md:tracking-wide"
              >
                <span>AED</span>
                <Image
                  src="/bin-yaber-assets/icons/arrows-down/arrow-down-linear-dark.png"
                  alt="down arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>

        <ul className="w-full max-w-[1192px] flex flex-col md:flex-row gap-4 md:gap-5 mx-auto mt-[20px] md:mt-[60px]">
          {(pricesSectionData || []).map((price) => (
            <PriceCard key={price._id} priceDetails={price} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default PricesSection;
