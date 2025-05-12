const API_ENDPOINTS = {
  // NOTE Auth::
  ADD_USER_BY_REGISTRATION: "/api/user/auth/register",
  GET_EMAIL_VERIFY: "/api/user/auth/verify-email",
  RESEND_OTP: "/api/user/auth/resend-otp",
  FORGOT_PASSWORD: "/api/user/auth/forgot-password",
  RESET_PASSWORD: "/api/user/auth/reset-password",
  LOGOUT_USER: "/api/user/auth/logout",

  // NOTE Session::
  GET_SESSION_USER_DETAILS: "/api/session-details",

  // NOTE Blog Post::
  CREATE_POST: "/api/blog/post/create",
  GET_ALL_POST: "/api/blog/post/view",
  GET_POST_DETAILS: "/api/blog/post/details",
  UPDATE_POST: "/api/blog/post/update",
  DELETE_POST: "/api/blog/post/delete",
  TOGGLE_ACTIVE_STATUS: "/api/blog/post/toggle-active-status",
  TOGGLE_FEATURED_STATUS: "/api/blog/post/toggle-featured-status",

  // NOTE Category::
  CREATE_NEW_CATEGORY: "/api/blog/category/create",
  GET_ALL_CATEGORIES: "/api/blog/category/view",
  CHANGE_CATEGORY_ACTIVE_STATUS: "/api/blog/category/toggle-active-status",
  CHANGE_CATEGORY_DEFAULT_STATUS: "/api/blog/category/toggle-default-status",
  CHANGE_CATEGORY_FEATURED_STATUS: "/api/blog/category/toggle-featured-status",
  GET_CATEGORY_DETAILS: "/api/blog/category/details",
  UPDATE_CATEGORY: "/api/blog/category/update",
  DELETE_CATEGORY: "/api/blog/category/delete",

  // News Article::
  // <> ADMIN <>
  CREATE_NEW_NEWS_ARTICLE: "/api/news/article/create",
  GET_ALL_NEWS_ARTICLES: "/api/news/article/view",
  GET_NEWS_ARTICLE_DETAILS: "/api/news/article/details",
  UPDATE_NEWS_ARTICLE: "/api/news/article/update",
  DELETE_NEWS_ARTICLE: "/api/news/article/delete",
  TOGGLE_NEWS_ARTICLE_ACTIVE_STATUS: "/api/news/article/toggle-active-status",
  TOGGLE_NEWS_ARTICLE_FEATURED_STATUS:
    "/api/news/article/toggle-featured-status",
  // <> PUBLIC <>
  GET_ALL_PUBLIC_NEWS_ARTICLES: "/api/client/news/article/list",
  GET_PUBLIC_NEWS_ARTICLE_DETAILS: "/api/client/news/article/details",

  // News Category::
  // <> ADMIN <>
  CREATE_NEW_NEWS_CATEGORY: "/api/news/category/create",
  GET_ALL_NEWS_CATEGORIES: "/api/news/category/view",
  GET_NEWS_CATEGORY_DETAILS: "/api/news/category/details",
  UPDATE_NEWS_CATEGORY: "/api/news/category/update",
  TOGGLE_NEWS_CATEGORY_ACTIVE_STATUS: "/api/news/category/toggle-active-status",
  TOGGLE_NEWS_CATEGORY_FEATURED_STATUS:
    "/api/news/category/toggle-featured-status",
  TOGGLE_NEWS_CATEGORY_DEFAULT_STATUS:
    "/api/news/category/toggle-default-status",
  DELETE_NEWS_CATEGORY: "/api/news/category/delete",
  // <> PUBLIC <>
  GET_ALL_PUBLIC_NEWS_CATEGORIES: "/api/client/news/category/list",

  // NOTE File::
  // <> ADMIN <>
  STORE_NEW_FILES: "/api/file/create",
  GET_ALL_FILES: "/api/file/view",
  DOWNLOAD_FILE: "/api/file/download",
  DELETE_FILE: "/api/file/delete",
  TOGGEL_FILE_DEFAULT_STATUS: "/api/file/toggle-default-status",
  // <> PUBLIC <>
  GET_ALL_PUBLIC_FILES: "/api/client/files/list",

  // NOTE Menu::
  // <> ADMIN <>
  STORE_NEW_MENU: "/api/menu/create",
  GET_ALL_MENUS: "/api/menu/view",
  UPDATE_MENU: "/api/menu/update",
  DELETE_MENU: "/api/menu/delete",
  MENU_DETAILS: "/api/menu/details",
  TOGGLE_MENU_PRODUCT_STATUS: "/api/menu/toggle-product-status",
  TOGGLE_MENU_ACTIVE_STATUS: "/api/menu/toggle-active-status",
  // <> PUBLIC <>
  GET_ALL_PUBLIC_MENUS: "/api/client/header-menu/list",

  // NOTE Users::
  GET_ALL_USERS: "/api/user/get-all-users",
  GET_USER_DETAILS: "/api/user/get-user-details",
  DELETE_USER: "/api/user/delete-user",
  CREATE_ADMIN_STAFF: "/api/user/create-admin-staff",
  UPDATE_USER: "/api/user/update",

  // NOTE Users Roles::
  CREATE_ROLE: "/api/user/role/create",
  GET_ALL_ROLES: "/api/user/role/lists",
  GET_ROLE_DETAILS: "/api/user/role/details",
  UPDATE_ROLE: "/api/user/role/update",
  DELETE_ROLE: "/api/user/role/delete",

  // NOTE Users Permissions::
  GET_ALL_PERMISSIONS: "/api/user/permission/lists",

  // NOTE Languages::
  // <> ADMIN <>
  GET_ALL_LANGUAGES: "/api/language/lists",
  CREATE_LANGUAGE: "/api/language/create",
  LANGUAGE_DETAILS: "/api/language/details",
  UPDATE_LANGUAGE: "/api/language/update",
  DELETE_LANGUAGE: "/api/language/delete",
  TOGGLE_ACTIVE_LANGUAGE: "/api/language/toggle-active-status",
  TOGGLE_RTL_LANGUAGE: "/api/language/toggle-rtl-status",
  TOGGLE_DEFAULT_LANGUAGE: "/api/language/toggle-default-status",
  // <> PUBLIC <>
  GET_ALL_PUBLIC_LANGUAGES: "/api/client/language/list",

  // NOTE Website Setting::
  // <> ADMIN <>
  UPDATE_WEBSITE_SETTINGS: "/api/website-settings/update",
  GET_ALL_WEBSITE_SETTINGS: "/api/website-settings/lists",
  // <> PUBLIC <>
  GET_ALL_PUBLIC_WEBSITE_SETTINGS: "/api/client/website-settings/list",

  // NOTE Timezone::
  TIMEZONE_LISTS: "/api/timezone/lists",
};

export { API_ENDPOINTS };
