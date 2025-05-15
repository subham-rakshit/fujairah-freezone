import {
  BusinessClubSection,
  FrontEndBreadcrumb,
  PageHeroSection,
  SectionTabs,
} from "@/components/public-pages-component";
import Image from "next/image";

const InvestorsCornerPage = async ({ searchParams }) => {
  const { tab } = await searchParams;

  return (
    <>
      <PageHeroSection
        sectionId="investors-corner-page-hero-section"
        bgImageClass="bg-investors-corner-hero-section-bg-image"
        heading="Investors corner"
        description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />

      <section id="investors-corner-page-content-section" className="w-full">
        <div className="w-full py-[32px] relative overflow-hidden">
          <div className="absolute top-[-200px] right-0 size-[600px]">
            <Image
              src="/fujairah-freezone/overlay/about-overlay-3.svg"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover opacity-50"
            />
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 left-[-309px] w-[900px] h-[600px] rotate-[28.15deg]">
            <Image
              src="/fujairah-freezone/overlay/about-overlay-4.svg"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover opacity-50"
            />
          </div>

          <div className="relative z-[99] max-screen-width px-5">
            <SectionTabs
              tabs={[
                { name: "Business Club" },
                { name: "Advertise With Us" },
                { name: "Listed Companies / Investors" },
              ]}
              activeTab={tab}
            />

            <FrontEndBreadcrumb
              fields={[
                { label: "Home", link: "/" },
                {
                  label: "Investors Corner",
                  link: "/investors-corner?tab=business-club",
                },
              ]}
              currentTabName={tab
                .split("-")
                .map((word) =>
                  word.length > 1 ? word[0].toUpperCase() + word.slice(1) : word
                )
                .join(" ")}
              timestamp="10th March, 2025"
              navContainerClass="flex flex-wrap items-center gap-1"
            />

            <BusinessClubSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default InvestorsCornerPage;
