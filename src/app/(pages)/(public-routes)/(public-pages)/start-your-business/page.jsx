import {
  FieldsOfInvestmentSection,
  FrontEndBreadcrumb,
  PageHeroSection,
  StartYourBusinessInfoSection,
} from "@/components/public-pages-component";
import Image from "next/image";

const StartYourBusinessPage = async () => {
  return (
    <>
      <PageHeroSection
        sectionId="start-your-business-page-hero-section"
        bgImageClass="bg-start-your-business-hero-section-bg-image"
        heading="Start Your Business"
        description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />

      <section id="start-your-business-page-content-section" className="w-full">
        <div className="w-full py-[32px] relative overflow-hidden">
          {/* Overlay 1 */}
          <div className="absolute top-[-400px] right-[-200px] w-full h-[800px] rotate-[158.18deg]">
            <Image
              src="/fujairah-freezone/overlay/start-ur-business-overlay-1.svg"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover opacity-50"
            />
          </div>

          {/* Overlay 2 */}
          <div className="absolute top-[500px] left-[-250px] w-full h-[600px] rotate-[340deg]">
            <Image
              src="/fujairah-freezone/overlay/start-ur-business-overlay-2.svg"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover opacity-50"
            />
          </div>

          {/* Overlay 3 */}
          <div className="absolute bottom-0 right-0 w-full h-[500px] rotate-[180deg]">
            <Image
              src="/fujairah-freezone/overlay/start-ur-business-overlay-3.svg"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover opacity-50"
            />
          </div>

          {/* Content Section */}
          <div className="relative z-[99] max-screen-width px-5">
            <FrontEndBreadcrumb
              fields={[{ label: "Home", link: "/" }]}
              currentTabName="Start Your Business"
              navContainerClass="flex flex-wrap items-center gap-1"
            />

            <StartYourBusinessInfoSection />

            <FieldsOfInvestmentSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default StartYourBusinessPage;
