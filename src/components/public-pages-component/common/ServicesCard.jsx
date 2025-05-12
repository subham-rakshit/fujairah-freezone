import Image from "next/image";
import { BackgroundRevealButton, FontResizerWrapper } from "..";

const ServicesCard = ({ service = {} }) => {
  if (Object.keys(service).length === 0) return null;

  return (
    <div
      key={service._id}
      className="h-[450px] rounded-[24px] overflow-hidden group hover:shadow-card-custom-small transition-all duration-500 ease-in-out bg-white"
    >
      <div className="relative w-full h-1/2">
        <Image
          src={service.imageSrc}
          alt={service.alt}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-cover group-hover:scale-[1.05] transition-all duration-500 ease-in-out"
        />
      </div>

      <div className="relative w-full h-1/2 flex flex-col justify-center px-[24px] py-[20px]">
        <div>
          <FontResizerWrapper
            as="h2"
            fontClasses={{
              0: "subtitle-0-1",
              1: "subtitle-1",
              2: "subtitle-1-1",
            }}
            className="text-gray-400 font-family-secondary font-[500]"
          >
            {service.title}
          </FontResizerWrapper>

          <FontResizerWrapper
            as="p"
            fontClasses={{
              0: "body-0-2",
              1: "body2",
              2: "body-2-1",
            }}
            className="text-gray-400 font-family-secondary font-[500] my-[10px]"
          >
            {service.description}
          </FontResizerWrapper>

          <BackgroundRevealButton
            btnLabel="Apply Now"
            textColor="text-gray-400"
            customFontSize={{
              0: "body-0-2",
              1: "body2",
              2: "body-2-1",
            }}
            btnHeight="h-10"
            innerBtnContainerWidth="w-10"
            iconSize={18}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
