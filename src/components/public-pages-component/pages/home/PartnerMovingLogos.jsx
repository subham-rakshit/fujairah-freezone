"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PartnerMovingLogos = ({ logos = [] }) => {
  if (logos.length === 0) return null;

  const marqueeVariants = {
    animate: {
      x: [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const renderLogos = (logo, index) => {
    const { src, alt } = logo;

    return (
      <div
        key={`logo-${index + 1}`}
        className="relative overflow-hidden w-full h-[70px] min-w-[200px]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 100vw"
          className="object-contain brightness-0 invert"
        />
      </div>
    );
  };

  return (
    <div className="w-full h-[100px]">
      <div className="marquee-container h-full flex items-center">
        <motion.div
          className="marquee-content flex gap-10"
          variants={marqueeVariants}
          animate="animate"
        >
          {[...logos, ...logos, ...logos].map((logo, index) =>
            renderLogos(logo, index)
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerMovingLogos;
