"use server";

import { API_ENDPOINTS } from "@/app/assets/data/apiEndPointData";
import { cacheKeyNames } from "@/app/assets/data/cacheKeysData";
import { getCache, setCache } from "@/lib/redis/actions";
import axios from "axios";

// [GET] HEADER MENUS
export const getAllPublicMenus = async (search = "") => {
  // Create a unique key for the cache
  const keyName = `${cacheKeyNames.MENUS}-${search || "search"}`;

  // Check if the cache is available, if available return the cached data
  const { parsedValue } = await getCache(keyName);
  if (parsedValue) {
    return {
      fetchData: parsedValue?.menus || [],
    };
  }

  // Make the request if the cache is not available and store the data in the cache
  const url = new URL(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}${API_ENDPOINTS.GET_ALL_PUBLIC_MENUS}?search=${search || ""}`
  );

  try {
    const response = await axios.get(url.toString());

    if (response.data.success && response.status === 200) {
      console.log("getAllPublicMenus: Database Call and storing in cache 💾");

      await setCache(keyName, JSON.stringify(response.data));

      return {
        fetchData: response.data?.menus || [],
      };
    }
  } catch (error) {
    console.log(`❌ Error in getting all menus FE CLIENT: ${error}`);

    return {
      fetchData: [],
    };
  }
};

// [GET] LANGUAGES
export const getAllPublicLanguages = async () => {
  // Create a unique key for the cache
  const keyName = `${cacheKeyNames.LANGUAGES}`;

  // Check if the cache is available, if available return the cached data
  const { parsedValue } = await getCache(keyName);
  if (parsedValue) {
    console.log("getAllPublicLanguages: Cache HIT ✅");
    return {
      fetchData: parsedValue?.languageList || [],
    };
  }

  // Make the request if the cache is not available and store the data in the cache
  const url = new URL(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}${API_ENDPOINTS.GET_ALL_PUBLIC_LANGUAGES}`
  );

  try {
    const response = await axios.get(url.toString());

    if (response.data.success && response.status === 200) {
      await setCache(keyName, JSON.stringify(response.data));
      console.log(
        "getAllPublicLanguages: Databse Call and storing in cache 💾"
      );

      return {
        fetchData: response.data?.languageList || [],
      };
    }
  } catch (error) {
    console.log(`❌ Error in getting all languages FE CLIENT: ${error}`);
    return {
      fetchData: [],
    };
  }
};

// [GET] WEBSITE SETTINGS
export const getAllPublicWebsiteSettings = async () => {
  const { parsedValue } = await getCache(cacheKeyNames.WEBSITE_SETTINGS);

  if (parsedValue) {
    console.log("getAllSettings: Cache HIT ✅");

    return {
      settingsData: parsedValue?.settingsList || [],
    };
  }

  // Make the request if the cache is not available and store the data in the cache
  const url = new URL(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}${API_ENDPOINTS.GET_ALL_PUBLIC_WEBSITE_SETTINGS}`
  );

  try {
    const response = await axios.get(url.toString());

    if (response.data.success && response.status === 200) {
      await setCache(
        cacheKeyNames.WEBSITE_SETTINGS,
        JSON.stringify(response.data)
      );
      console.log("getAllSettings: Databse Call and storing in cache 💾");

      return {
        settingsData: response.data?.settingsList || [],
      };
    }
  } catch (error) {
    console.log(`❌ Error in getting all settings FE CLIENT: ${error}`);

    return {
      settingsData: [],
    };
  }
};

// [GET] FILES
export const getAllPublicFiles = async () => {
  // Create a unique key for the cache
  const keyName = `${cacheKeyNames.FE_FILES}`;

  // Check if the cache is available, if available return the cached data
  const { parsedValue } = await getCache(keyName);
  if (parsedValue) {
    console.log("getAllPublicFiles: Cache HIT ✅");

    return {
      filesList: parsedValue?.files || [],
    };
  }

  // Make the request if the cache is not available and store the data in the cache
  const url = new URL(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}${API_ENDPOINTS.GET_ALL_PUBLIC_FILES}`
  );

  try {
    const response = await axios.get(url.toString());

    if (response.data.success && response.status === 200) {
      await setCache(keyName, JSON.stringify(response.data));
      console.log("getAllPublicFiles: Databse Call and storing in cache 💾");

      return {
        filesList: response.data?.files || [],
      };
    }
  } catch (error) {
    console.log(`❌ Error in getting all files FE CLIENT: ${error}`);

    return {
      filesList: [],
    };
  }
};

// [GET] NEWS CATEGORIES
export const getAllPublicNewsCategories = async (search = "search") => {
  // Create a unique key for the cache
  const keyName = `${cacheKeyNames.NEWS_CATEGORIES}-${search || "search"}`;

  // Check if the cache is available, if available return the cached data
  const { parsedValue } = await getCache(keyName);
  if (parsedValue) {
    console.log("getAllPublicNewsCategories: Cache HIT ✅");

    return {
      success: true,
      fetchData: parsedValue.categories,
    };
  }

  // Make the request if the cache is not available and store the data in the cache
  const url = new URL(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}${API_ENDPOINTS.GET_ALL_PUBLIC_NEWS_CATEGORIES}`
  );

  try {
    const response = await axios.get(url.toString());

    if (response.data.success && response.status === 200) {
      await setCache(keyName, JSON.stringify(response.data));
      console.log(
        "getAllPublicNewsCategories: Databse Call and storing in cache 💾"
      );

      return {
        fetchData: response.data.categories,
      };
    }
  } catch (error) {
    console.log(`❌ Error in getting all news categories FE CLIENT: ${error}`);

    return {
      fetchData: [],
    };
  }
};

// [GET] NEWS LISTING
export const getAllPublicNewsArticles = async (
  search,
  page,
  pageSize,
  category,
  status,
  featured
) => {
  // Create a unique key for the cache
  const keyName = `${cacheKeyNames.NEWS_ARTICLES}-${search || "search"}-${page || 1}-${pageSize || 5}-${category || "category"}-${status || "status"}-${featured || "featured"}`;

  // Check if the cache is available, if available return the cached data
  const { parsedValue } = await getCache(keyName);
  if (parsedValue) {
    console.log("getAllPublicNewsArticles: Cache HIT ✅");
    return {
      fetchData: parsedValue?.newsArticles || [],
      paginationData: parsedValue.paginationData,
    };
  }

  // Make the request if the cache is not available and store the data in the cache
  const url = new URL(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}${API_ENDPOINTS.GET_ALL_PUBLIC_NEWS_ARTICLES}`
  );
  const params = {
    search: search || "",
    page: page || 1,
    pageSize: pageSize || 5,
    category: category || "",
    status: status || "",
    featured: featured || "",
  };

  // Append parameters to the URL
  Object.keys(params).forEach((key) => {
    if (params[key]) {
      url.searchParams.append(key, params[key]);
    }
  });

  try {
    const response = await axios.get(url.toString());

    if (response.data.success && response.status === 200) {
      await setCache(keyName, JSON.stringify(response.data));
      console.log(
        "getAllPublicNewsArticles: Databse Call and storing in cache 💾"
      );

      return {
        fetchData: response.data?.newsArticles || [],
        paginationData: response.data.paginationData,
      };
    }
  } catch (error) {
    console.log(
      `❌ Error in getting all news articles FE CLIENT: ${error.message}`
    );

    return {
      fetchData: [],
      paginationData: {},
    };
  }
};

// [GET DETAILS] NEW ITEM DETAILS
export const getPublicNewsArticleDetails = async (targetId) => {
  const keyName = `${cacheKeyNames.NEWS_ARTICLE_DETAILS}-${targetId || "newsArticleId"}`;

  // Check if the cache is available, if available return the cached data
  const { parsedValue } = await getCache(keyName);
  if (parsedValue) {
    console.log("getPublicNewsArticleDetails: Cache HIT ✅");

    return {
      success: true,
      newsArticleData: parsedValue?.newsArticleDetails || {},
      translationDetails: parsedValue.translationData,
    };
  }

  // Make the request if the cache is not available and store the data in the cache
  const url = new URL(
    `${process.env.NEXT_PUBLIC_DOMAIN_URL}${API_ENDPOINTS.GET_PUBLIC_NEWS_ARTICLE_DETAILS}?targetId=${targetId || ""}`
  );

  try {
    // Make the request using fetch
    const response = await axios.get(url.toString());

    if (response.data.success && response.status === 200) {
      await setCache(keyName, JSON.stringify(response.data));
      console.log(
        "getPublicNewsArticleDetails: Databse Call and storing in cache 💾"
      );

      return {
        newsArticleData: response.data?.newsArticleDetails || {},
        translationDetails: response.data?.translationData || {},
      };
    }
  } catch (error) {
    console.log(`❌ Error in getting news article details FE CLIENT: ${error}`);
    return {
      newsArticleData: {},
      translationDetails: {},
    };
  }
};
