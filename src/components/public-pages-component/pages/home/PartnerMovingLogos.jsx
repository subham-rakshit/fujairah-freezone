"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const PartnerMovingLogos = ({ logos = [] }) => {
  if (logos.length === 0) return null;

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
    <div className="overflow-hidden flex">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-66.66%" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 gap-5"
      >
        {[...logos, ...logos, ...logos].map((logo, index) =>
          renderLogos(logo, index)
        )}
      </motion.div>
    </div>
  );
};

export default PartnerMovingLogos;
