import { fetchPublicNewsListingPageData } from "@/actions/frontEndPageDataActions";
import {
  CommonBannerSection,
  FrontEndBreadcrumb,
  NewsListingSection,
} from "@/components/public-pages-component";
import ROUTES from "@/constants/routes";
import { getLanguageFromCookie } from "@/utils/lanugage-action-utils";

const NewsPage = async ({ searchParams }) => {
  const currentLanguage = await getLanguageFromCookie();
  const {
    newsArticleResponse,
    newsCategoriesResponse,
    search,
    category,
    page,
  } = await fetchPublicNewsListingPageData(searchParams);

  return (
    <div className="w-full mt-[82px] lg:mt-[94px]">
      <FrontEndBreadcrumb
        fields={[{ label: "Home", link: ROUTES.HOME }]}
        currentTabName="News & Blogs"
        navContainerClass="flex flex-wrap items-center gap-2 mb-[24px]"
      />

      <CommonBannerSection
        tagText="News"
        headingText="Latest news and updates"
        descriptionText="Stay up to date with all the latest news! Promotions, course updates,
        exam tips and other important news for future drivers in Dubai."
      />
      <NewsListingSection
        currentLanguage={currentLanguage}
        newsArticleResponse={newsArticleResponse}
        newsCategoriesResponse={newsCategoriesResponse}
        search={search}
        selectedCategoryId={category}
        selectedPage={page}
      />
    </div>
  );
};

export default NewsPage;
