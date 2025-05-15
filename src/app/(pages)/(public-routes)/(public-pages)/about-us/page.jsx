import {
  ContentSection,
  FrontEndBreadcrumb,
  PageHeroSection,
  SectionTabs,
  WhyFujairahSection,
} from "@/components/public-pages-component";
import Image from "next/image";

const AboutUsPage = async ({ searchParams }) => {
  const { tab } = await searchParams;

  return (
    <>
      <PageHeroSection
        sectionId="about-page-hero-section"
        bgImageClass="bg-about-hero-section-bg-image"
        heading="About Us"
        description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />

      <section id="about-us-page-content-section" className="w-full">
        <div className="w-full py-[32px] relative overflow-hidden">
          <div className="absolute top-0 right-[-200px] size-[800px]">
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

          <div className="absolute bottom-0 right-0 w-full h-[500px]">
            <Image
              src="/fujairah-freezone/overlay/about-overlay-5.svg"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover opacity-50"
            />
          </div>

          <div className="relative z-[99] max-screen-width px-5">
            <SectionTabs
              tabs={[
                { name: "About Fujairah" },
                { name: "Mission Statement" },
                { name: "Messages" },
                { name: "Organization Structure" },
              ]}
              activeTab={tab}
            />

            <FrontEndBreadcrumb
              fields={[
                { label: "Home", link: "/" },
                {
                  label: "About Us",
                  link: "/about-us?tab=about-fujairah",
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

            <ContentSection />
          </div>
        </div>

        <WhyFujairahSection />
      </section>
    </>
  );
};

export default AboutUsPage;
