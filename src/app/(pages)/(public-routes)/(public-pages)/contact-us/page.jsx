import {
  CommonBannerSection,
  FrontEndBreadcrumb,
} from "@/components/public-pages-component";
import ROUTES from "@/constants/routes";

const ContactUsPage = () => {
  return (
    <div className="w-full mt-[82px] lg:mt-[94px]">
      <FrontEndBreadcrumb
        fields={[{ label: "Home", link: ROUTES.HOME }]}
        currentTabName="Contact us"
        navContainerClass="flex flex-wrap items-center gap-2 mb-[24px]"
      />

      <CommonBannerSection
        tagText="Contact"
        headingText="Contact us"
        descriptionText="Do you have any questions? Contact us for a consultation, course enrollment, or any other assistance!"
      />
    </div>
  );
};

export default ContactUsPage;

{
  /* <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115623.91532340301!2d55.26277624335936!3d25.09348689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6363a071d455%3A0x221e51d997b07845!2sBin%20Yaber%20Driving%20Institute%20-%20Head%20Office!5e0!3m2!1sen!2sin!4v1741802420851!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
></iframe>; */
}
