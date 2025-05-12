const ROUTES = {
  // Auth Routes:::
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  AUTH_TWO_STEP: "/auth-twostep",
  AUTH_OTP_RESEND: "/auth-otp-resend",
  AUTH_PASS_CHANGE: "/auth-pass-change",

  // Public Routes:::
  HOME: "/",
  ABOUT_US: "/about-us",
  COURSES: "/courses",
  NEWS: "/news",
  CAREERS: "/careers",
  CONTACT_US: "/contact-us",
  OFFERS: "/offers",
  NOT_FOUND: "/not-found",

  // Admin Routes:::
  ADMIN_DASHBOARD_ECOMMERCE: "/admin/dashboard",
  ADMIN_DASHBOARD_ANALYTICS: "/admin/dashboard/analytics",
  ADMIN_DASHBOARD_CRM: "/admin/dashboard/crm",

  // Blog System Routes
  ADMIN_BLOG_ALL_POSTS: "/admin/blog/post/view",
  ADMIN_BLOG_CREATE_POST: "/admin/blog/post/create",
  ADMIN_BLOG_UPDATE_POST: (postId) => `/admin/blog/post/update/${postId}`,

  // Category Routes
  ADMIN_BLOG_ALL_CATEGORY: "/admin/blog/category/view",
  ADMIN_BLOG_CREATE_CATEGORY: "/admin/blog/category/create",
  ADMIN_BLOG_UPDATE_CATEGORY: (categoryId) =>
    `/admin/blog/category/update/${categoryId}`,

  // News Article Routes
  ADMIN_ALL_NEWS_ARTICLES: "/admin/news/article/view",
  ADMIN_CREATE_NEWS_ARTICLE: "/admin/news/article/create",
  ADMIN_UPDATE_NEWS_ARTICLE: (targetId) =>
    `/admin/news/article/update/${targetId}`,

  // News Category Routes
  ADMIN_ALL_NEWS_CATEGORIES: "/admin/news/category/view",
  ADMIN_CREATE_NEWS_CATEGORY: "/admin/news/category/create",
  ADMIN_UPDATE_NEWS_CATEGORY: (targetId) =>
    `/admin/news/category/update/${targetId}`,

  // File Routes
  ADMIN_ALL_FILES: "/admin/file/view",
  ADMIN_CREATE_FILE: "/admin/file/create",

  // Menu Management Routes
  ADMIN_MENU_LISTS: "/admin/menu/view",
  ADMIN_ADD_NEW_MENU: "/admin/menu/create",
  ADMIN_EDIT_MENU: (targetId) => `/admin/menu/update/${targetId}`,

  // Staff Management Routes
  ADMIN_ALL_STAFF: "/admin/staff/view",
  ADMIN_STAFF_UPDATE: (targetId) => `/admin/staff/update/${targetId}`,

  ADMIN_STAFF_ALL_ROLES: "/admin/staff/role/view",
  ADMIN_STAFF_CREATE_ROLE: "/admin/staff/role/create",
  ADMIN_STAFF_UPDATE_ROLE: (roleId) => `/admin/staff/role/update/${roleId}`,

  // Language Management Routes
  ADMIN_ALL_LANGUAGES: "/admin/configurations/language/view",
  ADMIN_CREATE_LANGUAGE: "/admin/configurations/language/create",
  ADMIN_UPDATE_LANGUAGE: (targetId) =>
    `/admin/configurations/language/update/${targetId}`,

  // Setup Management Routes
  ADMIN_WEBSITE_APPEARANCE_SETUP: "/admin/configurations/appearance",
  ADMIN_WEBSITE_FOOTER_SETUP: "/admin/configurations/footer",

  PROFILE: "/profile",
};

export default ROUTES;
