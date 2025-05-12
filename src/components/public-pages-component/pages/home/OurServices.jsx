import { ourServices } from "@/app/assets/data/pagesData/home-page-data";
import Image from "next/image";
import { SectionInfo, ServicesCard } from "../..";

const OurServices = () => {
  return (
    <section
      id="home-page-our-services-section"
      className="w-full py-[80px] bg-[linear-gradient(to_bottom,_#FFFFFF,_#D6D9DB)] dark:bg-[linear-gradient(to_bottom,_transparent,_transparent)] relative"
    >
      <div className="absolute inset-0 bg-home-overlay-4 bg-cover opacity-80" />

      <div className="absolute top-[50px] left-0 w-[150px] h-[250px] overflow-hidden opacity-80">
        <Image
          src="/fujairah-freezone/overlay/overlay-three-dots.svg"
          alt="overlay"
          fill
          priority={true}
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-contain"
        />
      </div>

      <div className="relative z-[99] max-screen-width px-5">
        <SectionInfo
          heading="Our Services"
          subHeading="Fujairah Free Zone Authority is keen to achieve excellence in service provision that not only attains your satisfaction but also exceeds your expectation."
          className="mb-[54px]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {ourServices.map((service, index) => (
            <ServicesCard key={service._id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
