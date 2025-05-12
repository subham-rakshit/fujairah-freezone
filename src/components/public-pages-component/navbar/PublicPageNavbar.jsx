import { HeaderItems } from "..";

const PublicPageNavbar = async () => {
  return (
    <header className="fixed top-0 left-0 z-[999] w-full">
      <HeaderItems />
    </header>
  );
};

export default PublicPageNavbar;
