import { getPublicNewsArticleDetails } from "@/actions/frontEndActions/action";
import {
  FrontEndBreadcrumb,
  NewsDetailsSection,
} from "@/components/public-pages-component";

import ROUTES from "@/constants/routes";
import { getLanguageFromCookie } from "@/utils/lanugage-action-utils";
import mongoose from "mongoose";

const getTargetId = (slug) => {
  const itemsLength = slug?.split("-").length;

  return slug.split("-")[itemsLength - 1];
};

// Handle dynamic meta data for update page
export const generateMetadata = async ({ params }) => {
  const { slug } = await params;
  const targetId = getTargetId(slug);

  // If user is not authenticated or targetId is not valid, return default metadata
  if (!slug || !targetId || !mongoose.Types.ObjectId.isValid(targetId)) {
    return {
      title: `News Article Details ${process.env.NEXT_PUBLIC_META_APP_NAME}`,
      description: "News Article details not found.",
    };
  }

  // Fetch the post details using the postId and userId
  const { newsArticleData } = await getPublicNewsArticleDetails(targetId);
  const isDataAvailable = Object.keys(newsArticleData).length > 0;

  return {
    title: !isDataAvailable
      ? `Update News Article ${process.env.NEXT_PUBLIC_META_APP_NAME}`
      : newsArticleData?.metaTitle ||
        `New Article Details ${process.env.NEXT_PUBLIC_META_APP_NAME}`,
    description: !isDataAvailable
      ? "New Article details not found."
      : newsArticleData?.metaDescription || "News Article details page.",
  };
};

const NewsArticleDetailsPage = async ({ params }) => {
  const { slug } = await params;
  const targetId = getTargetId(slug);
  const currentLanguage = await getLanguageFromCookie();
  const newsArticleDetailsResponse =
    await getPublicNewsArticleDetails(targetId);

  return (
    <div className="w-full mt-[84px] md:mt-[104px] px-[8px] lg:px-[60px]">
      <FrontEndBreadcrumb
        fields={[
          { label: "Home", link: ROUTES.HOME },
          { label: "News & Blogs", link: ROUTES.NEWS },
        ]}
        currentTabName={
          newsArticleDetailsResponse?.translationDetails?.[currentLanguage]
            ?.title
        }
        isCurrentTabTranslated={true}
        navContainerClass="flex flex-wrap items-center gap-2 mb-[24px]"
      />

      <NewsDetailsSection
        currentLanguage={currentLanguage}
        newsArticleDetailsResponse={newsArticleDetailsResponse}
      />
    </div>
  );
};

export default NewsArticleDetailsPage;
