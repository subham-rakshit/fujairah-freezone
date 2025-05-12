"use server";

import { getLanguageFromCookie } from "@/utils/lanugage-action-utils";

import { fetchPublicParentLayoutData } from "@/actions/frontEndPageDataActions";
import {
  PublicPageFooter,
  PublicPageNavbar,
} from "@/components/public-pages-component";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const PublicPageLayout = async ({ children }) => {
  const currentLanguage = await getLanguageFromCookie();
  const { settingsData, filesList, languageList } =
    await fetchPublicParentLayoutData();

  return (
    <>
      <PublicPageNavbar />
      <main className="bg-white dark:bg-dark">{children}</main>
      <PublicPageFooter />
    </>
  );
};

export default PublicPageLayout;
