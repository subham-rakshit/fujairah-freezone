import {
  FAQsContentSection,
  FontResizerWrapper,
  FrontEndBreadcrumb,
} from "@/components/public-pages-component";

const FAQsPage = async ({ searchParams }) => {
  const { tab } = await searchParams;

  return (
    <>
      <section
        id="faqs-page-hero-section"
        className={`w-full flex min-h-[100vh] bg-cover bg-end relative overflow-hidden bg-faqs-hero-section-bg-image`}
      >
        <div className="absolute inset-0 bg-blue-gradient" />

        <div className="mt-auto max-screen-width relative z-[99] px-5 pb-[40px] 2xl:pb-[100px]">
          <div className="w-full max-w-[800px]">
            <FontResizerWrapper
              as="h1"
              fontClasses={{
                0: "heading-0-1",
                1: "heading-1",
                2: "heading-1-1",
              }}
              className="text-dark-white font-family-primary capitalize mb-[24px]"
            >
              FAQs
            </FontResizerWrapper>

            <FontResizerWrapper
              as="p"
              fontClasses={{
                0: "subtitle-0-2",
                1: "subtitle-2",
                2: "subtitle-2-1",
              }}
              className="text-dark-white font-family-secondary mb-[24px]"
            >
              Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </FontResizerWrapper>
          </div>
        </div>
      </section>

      <section id="faqs-content-section" className="w-full py-[32px]">
        <div className="max-screen-width px-5">
          <FrontEndBreadcrumb
            fields={[{ label: "Home", link: "/" }]}
            currentTabName="FAQs"
            timestamp="10th March, 2025"
            navContainerClass="flex flex-wrap items-center gap-1"
          />

          <FAQsContentSection activeTab={tab} />
        </div>
      </section>
    </>
  );
};

export default FAQsPage;
