import Image from "next/image";
import {
  BackgroundRevealButton,
  FontResizerWrapper,
  RevealOnView,
} from "../..";

const GetInTouch = () => {
  return (
    <section
      id="home-page-get-in-touch-section"
      className="w-full pt-[80px] pb-[120px] relative"
    >
      <div className="absolute inset-0 bg-home-overlay-4 bg-cover opacity-80" />

      <div className="relative z-[99] grid grid-cols-12 max-screen-width px-5">
        <RevealOnView
          as="div"
          yOffset={50}
          className="col-span-4 w-full h-[800px] relative overflow-hidden rounded-[24px] shadow-card-custom-small"
        >
          <Image
            src="/fujairah-freezone/pages/home/get-in-touch.png"
            alt="contact"
            fill
            sizes="(max-width: 768px) 100vw, 100vw"
            className="object-cover scale-x-[-1]"
          />
        </RevealOnView>

        <RevealOnView
          as="div"
          yOffset={50}
          delay={0.4}
          className="relative col-span-8 bg-white h-[95%] my-auto rounded-tr-[24px] rounded-br-[24px] overflow-hidden"
        >
          <div className="absolute top-full -translate-y-full right-0 size-[400px]">
            <Image
              src="/fujairah-freezone/overlay/overlay-6.svg"
              alt="overlay"
              fill
              sizes="(max-width: 768px) 100vw, 100vw"
              className="object-cover"
            />
          </div>

          <form className="absolute top-1/2 -translate-y-1/2 bg-[#00587E20] w-full h-full px-10 py-5">
            <FontResizerWrapper
              as="h1"
              fontClasses={{
                0: "heading-0-2",
                1: "heading-2",
                2: "heading-2-1",
              }}
              className="text-gray-400 font-family-primary font-[600] mb-5"
            >
              Get In Touch With Us
            </FontResizerWrapper>

            <FontResizerWrapper
              as="label"
              fontClasses={{
                0: "body-0-1",
                1: "body1",
                2: "body-1-1",
              }}
              className="text-gray-400 font-family-secondary font-[400]"
            >
              Name *
            </FontResizerWrapper>

            <input
              type="text"
              className="w-full h-[50px] border border-[#005B7E70] bg-transparent rounded-[12px] p-[20px] text-gray-400 font-family-secondary font-[500] mt-2 mb-5"
              placeholder="Your Name"
            />

            <div className="flex gap-5 mb-5">
              <div className="w-full">
                <FontResizerWrapper
                  as="label"
                  fontClasses={{
                    0: "body-0-1",
                    1: "body1",
                    2: "body-1-1",
                  }}
                  className="text-gray-400 font-family-secondary font-[400]"
                >
                  Email *
                </FontResizerWrapper>

                <input
                  type="text"
                  className="w-full h-[50px] border border-[#005B7E70] bg-transparent rounded-[12px] p-[20px] text-gray-400 font-family-secondary font-[500] mt-2"
                  placeholder="Your Email"
                />
              </div>

              <div className="w-full">
                <FontResizerWrapper
                  as="label"
                  fontClasses={{
                    0: "body-0-1",
                    1: "body1",
                    2: "body-1-1",
                  }}
                  className="text-gray-400 font-family-secondary font-[400]"
                >
                  Phone Number *
                </FontResizerWrapper>

                <input
                  type="text"
                  className="w-full h-[50px] border border-[#005B7E70] bg-transparent rounded-[12px] p-[20px] text-gray-400 font-family-secondary font-[500] mt-2"
                  placeholder="Your Phone"
                />
              </div>
            </div>

            <FontResizerWrapper
              as="label"
              fontClasses={{
                0: "body-0-1",
                1: "body1",
                2: "body-1-1",
              }}
              className="text-gray-400 font-family-secondary font-[400]"
            >
              Message *
            </FontResizerWrapper>

            <textarea
              rows={5}
              type="text"
              className="w-full border border-[#005B7E70] bg-transparent rounded-[12px] p-[20px] text-gray-400 font-family-secondary font-[500] mt-2 mb-5"
              placeholder="Your Message"
            />

            <FontResizerWrapper
              as="p"
              fontClasses={{
                0: "body-0-3",
                1: "body3",
                2: "body-3-1",
              }}
              className="text-gray-400 font-family-secondary font-[600] mb-5"
            >
              By submitting this form, you agree to the Terms and Privacy Policy
              of FFZA and consent to FFZAcollecting your details and contacting
              you via email, phone, or WhatsApp. Please be aware that due to our
              24/7 operations, you may receive a call after 6pm UAE time
              <br />
              <br />
              More information can be found in our{" "}
              <a href="#" className="text-primary-400 underline">
                privacy policy
              </a>
            </FontResizerWrapper>

            <BackgroundRevealButton
              btnLabel="Submit"
              textColor="text-gray-400"
              className="w-fit"
            />
          </form>
        </RevealOnView>
      </div>
    </section>
  );
};

export default GetInTouch;
