import { useTheme } from "next-themes";
import Image from "next/image";

import { topbarColor } from "@/app/assets/data/layoutCustomizerData/layoutCustomizerData";
import { TransitionLink } from "@/components";
import ROUTES from "@/constants/routes";

const NavLogo = ({ topbarColorType }) => {
  const { theme } = useTheme();

  return (
    <TransitionLink href={ROUTES.ADMIN_DASHBOARD_ECOMMERCE}>
      <div className="w-[50px] h-[50px] relative">
        <Image
          src={
            theme === "light" && topbarColorType === topbarColor.LIGHT_COLOR
              ? "/fujairah-freezone/website-logo/website-logo-light.png"
              : "/fujairah-freezone/website-logo/website-logo-light.png"
          }
          alt="logo"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          className="bg-cover"
        />
      </div>
    </TransitionLink>
  );
};

export default NavLogo;
