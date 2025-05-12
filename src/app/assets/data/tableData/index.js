import { PERMISSIONS } from "@/constants/permissions";

export const postTableColumns = [
  { name: "#" },
  { name: "Date", class: "hidden sm:table-cell" },
  { name: "Banner" },
  { name: "Title" },
  { name: "Category" },
  {
    name: "Actions",
    class: "text-right",
    requirePermissionList: [
      PERMISSIONS.POST.EDIT_POST,
      PERMISSIONS.POST.DELETE_POST,
      PERMISSIONS.POST.TOGGLE_ACTIVE_POST,
      PERMISSIONS.POST.TOGGLE_FEATURED_POST,
    ],
  },
];

export const newsArticleTableColumns = [
  { name: "#" },
  { name: "Date", class: "hidden sm:table-cell" },
  { name: "Banner" },
  { name: "Title" },
  { name: "Category" },
  {
    name: "Actions",
    class: "text-right",
    requirePermissionList: [
      PERMISSIONS.NEWS.EDIT_NEWS_ARTICLE,
      PERMISSIONS.NEWS.DELETE_NEWS_ARTICLE,
      PERMISSIONS.NEWS.TOGGLE_ACTIVE_NEWS_ARTICLE,
      PERMISSIONS.NEWS.TOGGLE_FEATURED_NEWS_ARTICLE,
    ],
  },
];

export const categoryTableColumns = [
  { name: "Name" },
  {
    name: "Actions",
    class: "md:hidden text-right",
    requirePermissionList: [
      PERMISSIONS.CATEGORY.EDIT_CATEGORY,
      PERMISSIONS.CATEGORY.DELETE_CATEGORY,
      PERMISSIONS.CATEGORY.TOGGLE_ACTIVE_CATEGORY,
      PERMISSIONS.CATEGORY.TOGGLE_FEATURED_CATEGORY,
      PERMISSIONS.CATEGORY.TOGGLE_DEFAULT_CATEGORY,
    ],
  },
  {
    name: "Active Status",
    class: "hidden md:table-cell",
    requirePermissionList: [PERMISSIONS.CATEGORY.TOGGLE_ACTIVE_CATEGORY],
  },
  {
    name: "Featured Status",
    class: "hidden md:table-cell",
    requirePermissionList: [PERMISSIONS.CATEGORY.TOGGLE_FEATURED_CATEGORY],
  },
  {
    name: "Default Status",
    class: "hidden md:table-cell",
    requirePermissionList: [PERMISSIONS.CATEGORY.TOGGLE_DEFAULT_CATEGORY],
  },
  {
    name: "Options",
    class: "hidden md:table-cell text-right",
    requirePermissionList: [
      PERMISSIONS.CATEGORY.EDIT_CATEGORY,
      PERMISSIONS.CATEGORY.DELETE_CATEGORY,
    ],
  },
];

export const newsCategoryTableColumns = [
  { name: "Name" },
  {
    name: "Actions",
    class: "md:hidden text-right",
    requirePermissionList: [
      PERMISSIONS.NEWS_CATEGORY.EDIT_NEWS_CATEGORY,
      PERMISSIONS.NEWS_CATEGORY.DELETE_NEWS_CATEGORY,
      PERMISSIONS.NEWS_CATEGORY.TOGGLE_ACTIVE_NEWS_CATEGORY,
      PERMISSIONS.NEWS_CATEGORY.TOGGLE_FEATURED_NEWS_CATEGORY,
      PERMISSIONS.NEWS_CATEGORY.TOGGLE_DEFAULT_NEWS_CATEGORY,
    ],
  },
  {
    name: "Active Status",
    class: "hidden md:table-cell",
    requirePermissionList: [
      PERMISSIONS.NEWS_CATEGORY.TOGGLE_ACTIVE_NEWS_CATEGORY,
    ],
  },
  {
    name: "Featured Status",
    class: "hidden md:table-cell",
    requirePermissionList: [
      PERMISSIONS.NEWS_CATEGORY.TOGGLE_FEATURED_NEWS_CATEGORY,
    ],
  },
  {
    name: "Default Status",
    class: "hidden md:table-cell",
    requirePermissionList: [
      PERMISSIONS.NEWS_CATEGORY.TOGGLE_DEFAULT_NEWS_CATEGORY,
    ],
  },
  {
    name: "Options",
    class: "hidden md:table-cell text-right",
    requirePermissionList: [
      PERMISSIONS.NEWS_CATEGORY.EDIT_NEWS_CATEGORY,
      PERMISSIONS.NEWS_CATEGORY.DELETE_NEWS_CATEGORY,
    ],
  },
];

export const roleTableColumns = () => [
  { name: "#" },
  { name: "Name" },
  {
    name: "Options",
    class: "text-right",
    requirePermissionList: [
      PERMISSIONS.STAFF.EDIT_STAFF_ROLE,
      PERMISSIONS.STAFF.DELETE_STAFF_ROLE,
    ],
  },
];

export const userTableColumns = () => [
  { name: "#", class: "pl-3" },
  { name: "Name" },
  { name: "Email" },
  { name: "Roles" },
  {
    name: "Options",
    class: "text-right pr-3",
    requirePermissionList: [
      PERMISSIONS.STAFF.EDIT_STAFF,
      PERMISSIONS.CATEGORY.DELETE_STAFF,
    ],
  },
];

export const languagesTableColumns = () => [
  { name: "#" },
  { name: "Name" },
  {
    name: "Actions",
    class: "md:hidden text-right",
    requirePermissionList: [
      PERMISSIONS.LANGUAGE.EDIT_LANGUAGE,
      PERMISSIONS.LANGUAGE.DELETE_LANGUAGE,
      PERMISSIONS.LANGUAGE.TOGGLE_ACTIVE_LANGUAGE,
      PERMISSIONS.LANGUAGE.TOGGLE_RTL_LANGUAGE,
      PERMISSIONS.LANGUAGE.TOGGLE_DEFAULT_LANGUAGE,
    ],
  },
  {
    name: "Active Status",
    class: "hidden md:table-cell",
    requirePermissionList: [PERMISSIONS.LANGUAGE.TOGGLE_ACTIVE_LANGUAGE],
  },
  {
    name: "RTL Status",
    class: "hidden md:table-cell",
    requirePermissionList: [PERMISSIONS.LANGUAGE.TOGGLE_RTL_LANGUAGE],
  },
  {
    name: "Default Status",
    class: "hidden md:table-cell",
    requirePermissionList: [PERMISSIONS.LANGUAGE.TOGGLE_DEFAULT_LANGUAGE],
  },
  {
    name: "Options",
    class: "hidden md:table-cell text-right",
    requirePermissionList: [
      PERMISSIONS.LANGUAGE.EDIT_LANGUAGE,
      PERMISSIONS.LANGUAGE.DELETE_LANGUAGE,
    ],
  },
];

export const menuTableColumns = () => [
  { name: "Name" },
  {
    name: "Actions",
    class: "md:hidden text-right",
    requirePermissionList: [
      PERMISSIONS.MENU_MANAGEMENT.EDIT_MENU,
      PERMISSIONS.MENU_MANAGEMENT.DELETE_MENU,
      PERMISSIONS.MENU_MANAGEMENT.TOGGLE_ACTIVE_MENU,
      PERMISSIONS.MENU_MANAGEMENT.TOGGLE_PRODUCT_MENU,
    ],
  },
  {
    name: "Active Status",
    class: "hidden md:table-cell",
    requirePermissionList: [PERMISSIONS.MENU_MANAGEMENT.TOGGLE_ACTIVE_MENU],
  },
  {
    name: "Product Menu Status",
    class: "hidden md:table-cell",
    requirePermissionList: [PERMISSIONS.MENU_MANAGEMENT.TOGGLE_PRODUCT_MENU],
  },
  {
    name: "Options",
    class: "hidden md:table-cell text-right",
    requirePermissionList: [
      PERMISSIONS.MENU_MANAGEMENT.EDIT_MENU,
      PERMISSIONS.MENU_MANAGEMENT.DELETE_MENU,
    ],
  },
];
