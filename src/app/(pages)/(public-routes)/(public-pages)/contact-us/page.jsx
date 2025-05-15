import {
  ContactFormSection,
  ContactMapSection,
  FrontEndBreadcrumb,
  OurAgentsContactSection,
  PageHeroSection,
} from "@/components/public-pages-component";
import Image from "next/image";

const ContactUsPage = () => {
  return (
    <>
      <PageHeroSection
        sectionId="contact-us-page-hero-section"
        bgImageClass="bg-contact-us-hero-section-bg-image"
        heading="Get In Touch"
        description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
      />

      <section
        id="contact-us-page-content-section"
        className="w-full relative overflow-hidden"
      >
        {/* Overlay 1 */}
        <div className="absolute top-[-200px] right-0 w-[600px] h-[600px]">
          <Image
            src="/fujairah-freezone/overlay/about-overlay-3.svg"
            alt="overlay"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover opacity-50"
          />
        </div>

        {/* Overlay 2 */}
        <div className="absolute top-1/2 -translate-y-1/2 left-[-60px] w-full h-[500px]">
          <Image
            src="/fujairah-freezone/overlay/start-ur-business-overlay-3.svg"
            alt="overlay"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover opacity-50"
          />
        </div>

        <div className="max-screen-width mt-[24px] px-5">
          <FrontEndBreadcrumb
            fields={[{ label: "Home", link: "/" }]}
            currentTabName="Contact Us"
            navContainerClass="flex flex-wrap items-center gap-1"
          />
        </div>

        <ContactMapSection />

        <ContactFormSection />

        <OurAgentsContactSection />
      </section>
    </>
  );
};

export default ContactUsPage;
