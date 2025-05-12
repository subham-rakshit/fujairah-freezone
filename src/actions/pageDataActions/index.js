"use server";

import { PERMISSIONS } from "@/constants/permissions";
import { verifySession } from "@/utils/verifySession";
import mongoose from "mongoose";
import {
  getAllCategories,
  getPerticularCategory,
} from "../apiClientActions/blogs/category";
import {
  getAllBlogPosts,
  getPerticularPost,
} from "../apiClientActions/blogs/posts";
import { getAllFilesFromDB } from "../apiClientActions/files";
import {
  getAllLanguages,
  getPerticularLanguage,
} from "../apiClientActions/languages";
import {
  getAllMenus,
  getPerticularMenuDetails,
} from "../apiClientActions/menu";
import {
  getAllNewsArticles,
  getPerticularNewsArticle,
} from "../apiClientActions/news/articles";
import {
  getAllNewsCategories,
  getPerticularNewsCategory,
} from "../apiClientActions/news/category";
import { getAllTimezones } from "../apiClientActions/timezone";
import {
  getAllPermissions,
  getAllRoles,
  getAllUsers,
  getPerticularRole,
  getUserDetails,
} from "../apiClientActions/user";
import { getSessionUserData } from "../authActions";

// NOTE User Permission Checks
export const checkUserPermission = async (premission) => {
  const { userId } = await verifySession();
  if (!userId) return { error: "Unauthorized" };

  const { success, userDetails, permissionsList } =
    await getSessionUserData(userId);
  const hasPermission =
    userDetails.adminAsignedRole?.name !== "Super Admin" &&
    !permissionsList.includes(premission);

  if (
    !success ||
    (userDetails.adminAsignedRole?.name !== "Super Admin" &&
      !permissionsList.includes(premission))
  ) {
    return { error: "Forbidden" };
  }

  return {
    userId,
    adminRole: userDetails.adminAsignedRole?.name || null,
    permissionsList,
  };
};

/*
 ******************
 ******************
 */

// ALL BLOG POSTS VIEW PAGE
export async function fetchAllPostsPageData(searchParams, requiredPermission) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { search, page, pageSize, category, status, featured } =
    await searchParams;

  // Check user have view_all_categories permission
  const canViewCategories =
    adminRole === "Super Admin" ||
    permissionsList.includes(PERMISSIONS.CATEGORY.VIEW_ALL_CATEGORIES);

  const [postsResponse, categoriesResponse] = await Promise.all([
    getAllBlogPosts(
      userId,
      search || "",
      page,
      pageSize,
      category,
      status,
      featured
    ),
    canViewCategories ? getAllCategories(userId) : Promise.resolve(null),
  ]);

  return {
    postsResponse,
    categoriesResponse,
    userId,
    search,
    adminRole,
    permissionsList,
  };
}

// CREATE BLOG POST PAGE
export async function fetchCreateBlogPageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { searchName, page, pageSize, selectedFileType } = await searchParams;

  const [categoriesResponse, filesResponse] = await Promise.all([
    getAllCategories(userId),
    getAllFilesFromDB(userId, searchName, page, pageSize, selectedFileType),
  ]);

  return {
    categoriesResponse,
    filesResponse,
    userId,
    searchName,
    selectedFileType,
    adminRole,
    permissionsList,
  };
}

// UPDATE BLOG POST PAGE
export async function fetchUpdateBlogPageData(
  params,
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { postId } = await params;
  if (postId === "undefiend" || !mongoose.Types.ObjectId.isValid(postId))
    return { error: "Not Found" };

  const { searchName, page, pageSize, selectedFileType } = await searchParams;

  const [categoriesResponse, filesResponse, languagesResponse, postResponse] =
    await Promise.all([
      getAllCategories(userId),
      getAllFilesFromDB(userId, searchName, page, pageSize, selectedFileType),
      getAllLanguages(userId),
      getPerticularPost(userId, postId),
    ]);

  return {
    categoriesResponse,
    filesResponse,
    languagesResponse,
    postResponse,
    userId,
    searchName,
    selectedFileType,
    adminRole,
    permissionsList,
  };
}

/*
 ******************
 ******************
 */

// ALL CATEGORIES VIEW PAGE
export async function fetchAllCategoriesPageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { search } = await searchParams;

  const { success, fetchData, message } = await getAllCategories(
    userId,
    search || ""
  );

  return {
    success,
    fetchData,
    message,
    userId,
    search,
    adminRole,
    permissionsList,
  };
}

// CREATE CATEGORY PAGE
export async function fetchCreateCategoryPageData(
  searchParams,
  requiredPermission
) {
  return await fetchCreateBlogPageData(searchParams, requiredPermission);
}

// UPDATE CATEGORY PAGE
export async function fetchUpdateCategoryPageData(
  params,
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { categoryId } = await params;
  if (
    categoryId === "undefiend" ||
    !mongoose.Types.ObjectId.isValid(categoryId)
  )
    return { error: "Not Found" };

  const { searchName, page, pageSize, selectedFileType } = await searchParams;

  const [
    categoriesResponse,
    filesResponse,
    languagesResponse,
    categoryDetailsResponse,
  ] = await Promise.all([
    getAllCategories(userId),
    getAllFilesFromDB(userId, searchName, page, pageSize, selectedFileType),
    getAllLanguages(userId),
    getPerticularCategory(userId, categoryId),
  ]);

  return {
    categoriesResponse,
    filesResponse,
    languagesResponse,
    categoryDetailsResponse,
    userId,
    searchName,
    selectedFileType,
    adminRole,
    permissionsList,
  };
}

/*
 ******************
 ******************
 */

// ALL NEWS ARTICLES VIEW PAGE
export async function fetchAllNewsArticlesPageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { search, page, pageSize, category, status, featured } =
    await searchParams;

  // Check user have view_all_news_categories permission
  const canViewCategories =
    adminRole === "Super Admin" ||
    permissionsList.includes(
      PERMISSIONS.NEWS_CATEGORY.VIEW_ALL_NEWS_CATEGORIES
    );

  const [newsArticleResponse, newsCategoriesResponse] = await Promise.all([
    getAllNewsArticles(
      userId,
      search || "",
      page,
      pageSize,
      category,
      status,
      featured
    ),
    canViewCategories ? getAllNewsCategories(userId) : Promise.resolve(null),
  ]);

  return {
    newsArticleResponse,
    newsCategoriesResponse,
    userId,
    search,
    adminRole,
    permissionsList,
  };
}

// CREATE NEWS ARTICLE PAGE
export async function fetchCreateNewsArticlePageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { searchName, page, pageSize, selectedFileType } = await searchParams;

  const [newsCategoriesResponse, filesResponse] = await Promise.all([
    getAllNewsCategories(userId),
    getAllFilesFromDB(userId, searchName, page, pageSize, selectedFileType),
  ]);

  return {
    newsCategoriesResponse,
    filesResponse,
    userId,
    searchName,
    selectedFileType,
    adminRole,
    permissionsList,
  };
}

// UPDATE NEWS ARTICLE PAGE
export async function fetchUpdateNewsArticlePageData(
  params,
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { targetId } = await params;
  if (targetId === "undefiend" || !mongoose.Types.ObjectId.isValid(targetId))
    return { error: "Not Found" };

  const { searchName, page, pageSize, selectedFileType } = await searchParams;

  const [
    newsCategoriesResponse,
    filesResponse,
    languagesResponse,
    newArticleResponse,
  ] = await Promise.all([
    getAllNewsCategories(userId),
    getAllFilesFromDB(userId, searchName, page, pageSize, selectedFileType),
    getAllLanguages(userId),
    getPerticularNewsArticle(userId, targetId),
  ]);

  return {
    newsCategoriesResponse,
    filesResponse,
    languagesResponse,
    newArticleResponse,
    userId,
    searchName,
    selectedFileType,
    adminRole,
    permissionsList,
  };
}

/*
 ******************
 ******************
 */

// ALL NEWS CATEGORIES VIEW PAGE
export async function fetchAllNewsCategoriesPageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { search } = await searchParams;

  const { success, fetchData, message } = await getAllNewsCategories(
    userId,
    search || ""
  );

  return {
    success,
    fetchData,
    message,
    userId,
    search,
    adminRole,
    permissionsList,
  };
}

// CREATE NEWS CATEGORY PAGE
export async function fetchCreateNewsCategoryPageData(
  searchParams,
  requiredPermission
) {
  return await fetchCreateNewsArticlePageData(searchParams, requiredPermission);
}

// UPDATE NEWS CATEGORY PAGE
export async function fetchUpdateNewsCategoryPageData(
  params,
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { targetId } = await params;
  if (targetId === "undefiend" || !mongoose.Types.ObjectId.isValid(targetId))
    return { error: "Not Found" };

  const { searchName, page, pageSize, selectedFileType } = await searchParams;

  const [
    newsCategoriesResponse,
    filesResponse,
    languagesResponse,
    newsCategoryDetailsResponse,
  ] = await Promise.all([
    getAllNewsCategories(userId),
    getAllFilesFromDB(userId, searchName, page, pageSize, selectedFileType),
    getAllLanguages(userId),
    getPerticularNewsCategory(userId, targetId),
  ]);

  return {
    newsCategoriesResponse,
    filesResponse,
    languagesResponse,
    newsCategoryDetailsResponse,
    userId,
    searchName,
    selectedFileType,
    adminRole,
    permissionsList,
  };
}

/*
 ******************
 ******************
 */

// ADMIN_STAFF DETAILS PAGE
export async function fetchAdminStaffDetailsPageData(
  params,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId } = permissionCheck;
  const { targetId } = await params;
  if (targetId === "undefiend" || !mongoose.Types.ObjectId.isValid(targetId))
    return { error: "Not Found" };

  const [userDetailsResponse, rolesResponse] = await Promise.all([
    getUserDetails(userId, targetId),
    getAllRoles(userId),
  ]);

  return {
    userDetailsResponse,
    rolesResponse,
    userId,
    targetId,
  };
}

// ADMIN_STAFF LIST PAGE
export async function fetchAdminStaffListPageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { search, page, pageSize, role } = await searchParams;

  // Check user have VIEW_STAFF_ROLES permission
  const canViewRoles =
    adminRole === "Super Admin" ||
    permissionsList.includes(PERMISSIONS.STAFF.VIEW_STAFF_ROLES);

  const [getAllUsersResponse, getAllRolesResponse] = await Promise.all([
    getAllUsers(userId, search || "", page, pageSize, role),
    canViewRoles ? getAllRoles(userId) : Promise.resolve(null),
  ]);

  return {
    getAllUsersResponse,
    getAllRolesResponse,
    userId,
    adminRole,
    permissionsList,
  };
}

/*
 ******************
 ******************
 */

// ALL ADMIN_CREATED_ROLE
export async function fetchAllAdminCreatedRolePageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { search, page, pageSize } = await searchParams;

  const { success, fetchData, paginationData, message } = await getAllRoles(
    userId,
    search,
    page,
    pageSize
  );

  return {
    fetchData,
    paginationData,
    message,
    userId,
    adminRole,
    permissionsList,
  };
}

// CREATE ADMIN STAFF ROLE
export async function fetchCreateAdminStaffRolePageData(requiredPermission) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId } = permissionCheck;

  const { success, fetchData } = await getAllPermissions(userId);

  return {
    success,
    fetchData,
    userId,
  };
}

// UPDATE ADMIN STAFF ROLE
export async function fetchUpdateAdminStaffRolePageData(
  params,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId } = permissionCheck;
  const { roleId } = await params;
  if (roleId === "undefiend" || !mongoose.Types.ObjectId.isValid(roleId))
    return { error: "Not Found" };

  const [permissionsResponse, roleResponse] = await Promise.all([
    getAllPermissions(userId),
    getPerticularRole(userId, roleId),
  ]);

  return {
    permissionsResponse,
    roleResponse,
    userId,
    roleId,
  };
}

/*
 ******************
 ******************
 */

// ALL LANGUAGES VIEW PAGE
export async function fetchAllLanguagessPageData(requiredPermission) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;

  const { success, fetchData, message } = await getAllLanguages(userId);

  return {
    success,
    fetchData,
    message,
    userId,
    adminRole,
    permissionsList,
  };
}

// UPDATE LANGUAGE PAGE
export async function fetchUpdateLanguagePageData(params, requiredPermission) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId } = permissionCheck;
  const { targetId } = await params;
  if (targetId === "undefiend" || !mongoose.Types.ObjectId.isValid(targetId))
    return { error: "Not Found" };

  const { success, languageData, message } = await getPerticularLanguage(
    userId,
    targetId
  );

  return {
    success,
    languageData,
    message,
    userId,
  };
}

/*
 ******************
 ******************
 */

// ADD NEW MENU PAGE
export async function fetchCreateNewMenuPageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId } = permissionCheck;

  const { search } = await searchParams;

  const menusResponse = await getAllMenus(userId, search);

  return {
    menusResponse,
    userId,
  };
}

// ALL MENU LISTING PAGE
export async function fetchAllMenusPageData(searchParams, requiredPermission) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;

  const { search } = await searchParams;

  const menusResponse = await getAllMenus(userId, search);

  return {
    menusResponse,
    userId,
    adminRole,
    permissionsList,
  };
}

// UPDATE MENU PAGE
export async function fetchUpdateMenuPageData(params, requiredPermission) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;
  const { targetId } = await params;
  if (targetId === "undefiend" || !mongoose.Types.ObjectId.isValid(targetId))
    return { error: "Not Found" };

  const [menusResponse, languagesResponse, menuDetailsResponse] =
    await Promise.all([
      getAllMenus(userId),
      getAllLanguages(userId),
      getPerticularMenuDetails(userId, targetId),
    ]);

  return {
    menusResponse,
    languagesResponse,
    menuDetailsResponse,
    userId,
    adminRole,
    permissionsList,
  };
}

/*
 ******************
 ******************
 */

// WEBSITE GENERAL SETTINGS PAGE
export async function fetchWebsiteGeneralSettingPageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;

  const { searchName, page, pageSize, selectedFileType } = await searchParams;

  const [allFilesResponse, allTimezonesResponse, languagesResponse] =
    await Promise.all([
      getAllFilesFromDB(userId, searchName, page, pageSize, selectedFileType),
      getAllTimezones(userId),
      getAllLanguages(userId),
    ]);

  return {
    allFilesResponse,
    allTimezonesResponse,
    languagesResponse,
    userId,
    adminRole,
    permissionsList,
    searchName,
    selectedFileType,
  };
}

// WEBSITE FOOTER SETTINGS PAGE
export async function fetchWebsiteFooterSettingsPageData(
  searchParams,
  requiredPermission
) {
  const permissionCheck = await checkUserPermission(requiredPermission);
  if (permissionCheck.error) return permissionCheck;

  const { userId, adminRole, permissionsList } = permissionCheck;

  const { searchName, page, pageSize, selectedFileType } = await searchParams;

  const [allFilesResponse, languagesResponse] = await Promise.all([
    getAllFilesFromDB(userId, searchName, page, pageSize, selectedFileType),
    getAllLanguages(userId),
  ]);

  return {
    allFilesResponse,
    languagesResponse,
    userId,
    adminRole,
    permissionsList,
    searchName,
    selectedFileType,
  };
}
