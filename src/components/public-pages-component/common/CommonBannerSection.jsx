import { PageNavigationButton } from "..";

const CommonBannerSection = ({
  tagText = "",
  headingText = "",
  descriptionText = "",
}) => {
  return (
    <div className="w-full rounded-[24px] md:rounded-[32px] bg-white px-[16px] py-[40px] md:p-[104px] flex flex-col justify-center items-center gap-[16px] md:gap-[20px]">
      <PageNavigationButton btnText={tagText} extraClasses="w-fit h-fit" />
      <h1 className="text-[34px] md:text-[64px] text-black-500 font-candara-rg font-bold leading-[100%] text-center">
        {headingText}
      </h1>
      <p className="w-full max-w-[598px] text-[18px] md:text-[20px] text-black-500 font-candara-rg leading-[100%] text-center">
        {descriptionText}
      </p>
    </div>
  );
};

export default CommonBannerSection;
