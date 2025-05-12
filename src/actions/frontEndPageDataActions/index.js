"use server";

import {
  getAllPublicFiles,
  getAllPublicLanguages,
  getAllPublicMenus,
  getAllPublicNewsArticles,
  getAllPublicNewsCategories,
  getAllPublicWebsiteSettings,
} from "../frontEndActions/action";

// Parent Layout Data
export const fetchPublicParentLayoutData = async () => {
  const [websiteSettingsResponse, filesResponse, languageResponse] =
    await Promise.all([
      getAllPublicWebsiteSettings(),
      getAllPublicFiles(),
      getAllPublicLanguages(),
    ]);

  return {
    settingsData: websiteSettingsResponse?.settingsData || [],
    filesList: filesResponse?.filesList || [],
    languageList: languageResponse?.fetchData || [],
  };
};

// Header Data
export const fetchPublicHeaderData = async () => {
  const headerMenuResponse = await getAllPublicMenus();

  return {
    menuList: headerMenuResponse?.fetchData || [],
  };
};

// News Listing Page Data
export const fetchPublicNewsListingPageData = async (searchParams) => {
  const { search, page, pageSize, category, status, featured } =
    await searchParams;

  const [newsArticleResponse, newsCategoriesResponse] = await Promise.all([
    getAllPublicNewsArticles(
      search,
      page,
      pageSize,
      category,
      status,
      featured
    ),
    getAllPublicNewsCategories(),
  ]);

  return {
    newsArticleResponse,
    newsCategoriesResponse,
    search,
    category,
    page,
  };
};
