import {
  FrontEndBreadcrumb,
  NewsEventsContentSection,
  PageHeroSection,
  SectionTabs,
} from "@/components/public-pages-component";
import Image from "next/image";

const MediaCenterPage = async ({ searchParams }) => {
  const { tab } = await searchParams;

  return (
    <>
      <PageHeroSection
        sectionId="media-center-page-hero-section"
        bgImageClass="bg-media-center-hero-section-bg-image"
        heading="Media Center"
        description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />

      <section id="media-center-page-content-section" className="w-full">
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

          <div className="relative z-[99] max-screen-width px-5">
            <SectionTabs
              tabs={[
                { name: "News & Events" },
                { name: "Photo Gallery" },
                { name: "Video Gallery" },
                { name: "Commercial Movie" },
              ]}
              activeTab={tab}
            />

            <FrontEndBreadcrumb
              fields={[
                { label: "Home", link: "/" },
                {
                  label: "Media Center",
                  link: "/media-center?tab=news-%26-events",
                },
              ]}
              currentTabName={tab
                .split("-")
                .map((word) =>
                  word.length > 1 ? word[0].toUpperCase() + word.slice(1) : word
                )
                .join(" ")}
              navContainerClass="flex flex-wrap items-center gap-1"
            />

            <NewsEventsContentSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaCenterPage;
